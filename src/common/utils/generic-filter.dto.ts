// src/common/generic-filter.dto.ts

import { FilterOperators } from './filter-operators';

/**
 * A generic filter DTO that maps each field of the entity to its corresponding filter operators.
 * This ensures type safety by restricting filters to the fields defined in the entity.
 */

export type GenericFilterDto<T> = {
  [K in keyof T]?: T[K] extends object
    ? GenericFilterDto<T[K]>
    : FilterOperators<T[K]> | T[K];
};
