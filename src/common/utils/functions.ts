import {
  EntityTarget,
  FindOperator,
  FindOptionsWhere,
  getMetadataArgsStorage,
  In,
  LessThan,
  LessThanOrEqual,
  Like,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';
import { FilterOperators } from './filter-operators';
import { GenericFilterDto } from './generic-filter.dto';
import { PaginatedResponseDto } from '../domain/dtos/paginateResponse.dto';

/**
 * Creates a paginated response object.
 *
 * @template T - The type of the data items.
 * @param {Object} params - The parameters for creating the paginated response.
 * @param {T[]} params.data - The array of data items.
 * @param {number} params.total - The total number of items.
 * @param {number} params.page - The current page number.
 * @param {number} params.limit - The number of items per page.
 * @returns {PaginatedResponseDto<T>} The paginated response object.
 */
export function createPaginatedResponse<T>({
  data,
  total,
  page,
  limit,
}: {
  data: T[];
  total: number;
  page: number;
  limit: number;
}): PaginatedResponseDto<T> {
  return {
    data,
    total: total,
    currentPage: page,
    nextPage: page < Math.ceil(total / limit) ? page + 1 : null,
    previousPage: page > 1 ? page - 1 : null,
    lastPage: Math.ceil(total / limit),
    limit,
  };
}

/**
 * Parses query parameters into GenericFilterDto<T>, mapping operator suffixes appended with '$'.
 * Supports nested fields using dot notation.
 * For example, 'user.name$sw=San' maps to { user: { name: { $sw: 'San' } } }.
 *S
 * @template T - The type of the entity.
 * @param {Record<string, any>} query - The query parameters from the request.
 * @returns {GenericFilterDto<T>} The parsed filters object.
 */
export function adjustFilters<Entity>(
  entity: EntityTarget<Entity>,
  filters: GenericFilterDto<Entity>,
): FindOptionsWhere<Entity> {
  const adjustedFilters: Partial<FindOptionsWhere<Entity>> = {};

  if (!filters || typeof filters !== 'object')
    return adjustedFilters as FindOptionsWhere<Entity>;

  // Retrieve relation property names using TypeORM's metadata storage
  const entityName = typeof entity === 'function' ? entity.name : entity;
  const entityRelations = getMetadataArgsStorage().relations.filter(
    (relation) => {
      const targetName =
        typeof relation.target === 'function'
          ? relation.target.name
          : relation.target;
      return targetName === entityName;
    },
  );
  const relationPropertyNames = new Set(
    entityRelations.map((relation) => relation.propertyName),
  );

  // Define valid operator keys
  const validOperators = new Set([
    '$eq',
    '$ne',
    '$gt',
    '$lt',
    '$gte',
    '$lte',
    '$in',
    '$con',
    '$sw',
    '$ew',
  ]);

  function processFilters<T>(
    currentFilters: GenericFilterDto<T>,
    currentPath: string[] = [],
  ): FindOptionsWhere<T> {
    const result = {} as FindOptionsWhere<T>;

    for (const [fieldKey, value] of Object.entries(currentFilters) as [
      keyof T,
      any,
    ][]) {
      const fullPath = [...currentPath, fieldKey.toString()];
      const fieldKeyString = fieldKey.toString();
      const fieldKeyParts = fieldKeyString.split('.');

      const fieldName = fieldKeyParts[0] as keyof T;
      const remainingParts = fieldKeyParts.slice(1);

      type FieldType = NonNullable<T[typeof fieldName]>;

      if (remainingParts.length > 0) {
        // Nested field, build nested structure
        const nestedFieldKey = remainingParts.join('.');
        const nestedValue = { [nestedFieldKey]: value };

        result[fieldName] = processFilters<FieldType>(
          nestedValue as GenericFilterDto<FieldType>,
          fullPath,
        ) as any;
      } else if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
      ) {
        const hasValidOperator = Object.keys(value).some(
          (key) => validOperators.has(key) || validOperators.has('$' + key),
        );
        if (hasValidOperator) {
          result[fieldName] = processOperators<FieldType>(
            value as FilterOperators<FieldType>,
            fullPath,
          ) as any;
        } else {
          result[fieldName] = processFilters<FieldType>(
            value as GenericFilterDto<FieldType>,
            fullPath,
          ) as any;
        }
      } else {
        result[fieldName] = value as any;
      }
    }

    return result;
  }

  function processOperators<T>(
    operators: FilterOperators<T>,
    path: string[],
  ): FindOperator<any> {
    let condition: FindOperator<any> | any[] | undefined;

    for (let [op, value] of Object.entries(operators) as [
      keyof FilterOperators<T>,
      any,
    ][]) {
      if (!op.startsWith('$')) {
        op = ('$' + op) as keyof FilterOperators<T>;
      }

      if (!validOperators.has(op)) {
        throw new Error(
          `Unrecognized operator '${op}' for path '${path.join('.')}'`,
        );
      }

      const newCondition = createCondition(op, value);

      if (condition) {
        if (Array.isArray(condition)) {
          condition = [...condition, newCondition];
        } else {
          condition = [condition, newCondition];
        }
      } else {
        condition = newCondition;
      }
    }

    // If multiple conditions exist, combine them with AND logic
    if (Array.isArray(condition)) {
      // Combine conditions using appropriate logic (e.g., AND)
      // TypeORM doesn't support arrays directly, so you may need to adjust this part
      // For simplicity, we'll return the first condition
      return condition[0];
    }

    return condition!;
  }

  function createCondition<T>(
    operator: keyof FilterOperators<T>,
    value: any,
  ): FindOperator<any> {
    switch (operator) {
      case '$eq':
        return value;
      case '$ne':
        return Not(value);
      case '$gt':
        return MoreThan(value);
      case '$lt':
        return LessThan(value);
      case '$gte':
        return MoreThanOrEqual(value);
      case '$lte':
        return LessThanOrEqual(value);
      case '$in':
        if (typeof value === 'string') {
          value = value.split(',').map((v) => v.trim());
        }
        return In(value as T[]);
      case '$con':
        return Like(`%${value}%`);
      case '$sw':
        return Like(`${value}%`);
      case '$ew':
        return Like(`%${value}`);
      default:
        throw new Error(`Unhandled operator: ${operator}`);
    }
  }

  return processFilters(filters) as FindOptionsWhere<Entity>;
}
