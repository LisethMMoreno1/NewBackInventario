import { HttpException, Injectable, Scope } from '@nestjs/common';

import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { MaintenanceContext } from '../context/maintenaceContext.service';
import { TypeOfGender } from 'src/modules/maintenance/domain/type-of-gender/typeGender.entity';

/**
 * Represents a TypeOfGender repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class TypeOfGenderRepository {
  /**
   * Creates a new instance of TypeOfGenderepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: MaintenanceContext) {}

  /**
   * Retrieves all TypeOfGenders from the database.
   * @param options - Optional criteria to filter the TypeOfGenders.
   * @returns A promise that resolves to an array of TypeOfGenders.
   * @throws HttpException if there's an error retrieving the TypeOfGenders from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<TypeOfGender>,
  ): Promise<TypeOfGender[]> {
    try {
      return await this._context.typeOfGender.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new TypeOfGender in the database.
   * @param typeOfGender - The TypeOfGender object to create.
   * @returns A promise that resolves to the created TypeOfGender.
   * @throws HttpException if there's an error creating the TypeOfGender in the database.
   */
  async create(typeOfGender: TypeOfGender): Promise<TypeOfGender> {
    try {
      const typeOfGenderData =
        await this._context.typeOfGender.create(typeOfGender);
      return {
        ...typeOfGender,
        ...typeOfGenderData?.raw[0],
        ...typeOfGenderData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a TypeOfGender by the provided criteria in the database.
   * @param options - The criteria to find the TypeOfGender.
   * @returns A promise that resolves to the found TypeOfGender.
   * @throws HttpException if there's an error finding the TypeOfGender in the database.
   */
  async getOne(
    options: GetOneCriteriaType<TypeOfGender>,
  ): Promise<TypeOfGender> {
    try {
      return await this._context.typeOfGender.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a TypeOfGender in the database.
   * @param criteria - The criteria to find the TypeOfGender to update.
   * @param typeOfGender - The updated TypeOfGender object.
   * @returns A promise that resolves to the updated TypeOfGender.
   * @throws HttpException if there's an error updating the TypeOfGender in the database.
   */
  async update(
    criteria: UpdateCriteriaType<TypeOfGender>,
    typeOfGender: TypeOfGender,
  ): Promise<TypeOfGender> {
    try {
      const updateTypeOfGender = await this._context.typeOfGender.update(
        criteria,
        typeOfGender,
      );
      return {
        ...TypeOfGender,
        ...updateTypeOfGender?.raw[0],
        ...updateTypeOfGender?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a TypeOfGender from the database.
   * @param criteria - The criteria to find the TypeOfGender to delete.
   * @returns A promise that resolves to the deleted TypeOfGender.
   * @throws HttpException if there's an error deleting the TypeOfGender from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<TypeOfGender>,
  ): Promise<TypeOfGender> {
    try {
      const deleteTypeOfGender =
        await this._context.typeOfGender.delete(criteria);
      return { ...deleteTypeOfGender?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a TypeOfGender in the database.
   * @param TypeOfGender - The TypeOfGender object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved TypeOfGender.
   * @throws HttpException if there's an error saving the TypeOfGender in the database.
   */
  async save(
    typeOfGender: TypeOfGender,
    options?: SaveOptionsType<TypeOfGender>,
  ): Promise<TypeOfGender> {
    try {
      const TypeOfGenderSaved = await this._context.typeOfGender.save(
        typeOfGender,
        options,
      );
      return TypeOfGenderSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
