import { HttpException, Injectable, Scope } from '@nestjs/common';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { MaintenanceContext } from '../context/maintenaceContext.service';
import { TypeOfCurrency } from 'src/modules/maintenance/domain/type-Of-currency/typeCurrency.entity';

/**
 * Repository for managing TypeOfCurrency entities.
 */
@Injectable({ scope: Scope.REQUEST })
export class TypeOfCurrencyRepository {
  /**
   * Constructor for TypeOfCurrencyRepository.
   * @param _context - The database context.
   */
  constructor(private readonly _context: MaintenanceContext) {}

  /**
   * Retrieves all TypeOfCurrency entities.
   * @param options - Optional criteria for filtering.
   * @returns A promise resolving to an array of TypeOfCurrency entities.
   * @throws HttpException if there's an error during retrieval.
   */
  async getAll(
    options?: GetAllCriteriaType<TypeOfCurrency>,
  ): Promise<TypeOfCurrency[]> {
    try {
      return await this._context.typeOfCurrency.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Database Error: ${error?.message || 'Unknown error'}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new TypeOfCurrency entity.
   * @param typeOfCurrency - The entity to create.
   * @returns A promise resolving to the created entity.
   * @throws HttpException if there's an error during creation.
   */
  async create(typeOfCurrency: TypeOfCurrency): Promise<TypeOfCurrency> {
    try {
      const result = await this._context.typeOfCurrency.create(typeOfCurrency);
      return {
        ...typeOfCurrency,
        ...result.raw[0],
        ...result.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Database Error: ${error?.message || 'Unknown error'}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Retrieves a single TypeOfCurrency entity by criteria.
   * @param options - The criteria for retrieval.
   * @returns A promise resolving to the found entity.
   * @throws HttpException if there's an error during retrieval.
   */
  async getOne(
    options: GetOneCriteriaType<TypeOfCurrency>,
  ): Promise<TypeOfCurrency> {
    try {
      return await this._context.typeOfCurrency.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Database Error: ${error?.message || 'Unknown error'}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a TypeOfCurrency entity.
   * @param criteria - The criteria to locate the entity.
   * @param typeOfCurrency - The updated data.
   * @returns A promise resolving to the updated entity.
   * @throws HttpException if there's an error during the update.
   */
  async update(
    criteria: UpdateCriteriaType<TypeOfCurrency>,
    typeOfCurrency: TypeOfCurrency,
  ): Promise<TypeOfCurrency> {
    try {
      const result = await this._context.typeOfCurrency.update(
        criteria,
        typeOfCurrency,
      );
      return {
        ...typeOfCurrency,
        ...result.raw[0],
        ...result.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Database Error: ${error?.message || 'Unknown error'}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a TypeOfCurrency entity.
   * @param criteria - The criteria to locate the entity.
   * @returns A promise resolving to the deleted entity.
   * @throws HttpException if there's an error during deletion.
   */
  async delete(
    criteria: DeleteCriteriaType<TypeOfCurrency>,
  ): Promise<Partial<TypeOfCurrency>> {
    try {
      const result = await this._context.typeOfCurrency.delete(criteria);
      return result.raw[0];
    } catch (error) {
      throw new HttpException(
        `Database Error: ${error?.message || 'Unknown error'}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a TypeOfCurrency entity.
   * @param typeOfCurrency - The entity to save.
   * @param options - Optional save options.
   * @returns A promise resolving to the saved entity.
   * @throws HttpException if there's an error during saving.
   */
  async save(
    typeOfCurrency: TypeOfCurrency,
    options?: SaveOptionsType<TypeOfCurrency>,
  ): Promise<TypeOfCurrency> {
    try {
      return await this._context.typeOfCurrency.save(typeOfCurrency, options);
    } catch (error) {
      throw new HttpException(
        `Database Error: ${error?.message || 'Unknown error'}`,
        error?.status || 500,
      );
    }
  }
}
