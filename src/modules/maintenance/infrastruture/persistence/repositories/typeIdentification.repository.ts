import { HttpException, Injectable, Scope } from '@nestjs/common';

import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { MaintenanceContext } from '../context/maintenaceContext.service';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';

/**
 * Represents a TypeOfIdentification repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class TypeOfIdentificationRepository {
  /**
   * Creates a new instance of TypeOfIdentificationRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: MaintenanceContext) {}

  /**
   * Retrieves all TypeOfIdentification from the database.
   * @param options - Optional criteria to filter the TypeOfIdentification.
   * @returns A promise that resolves to an array of TypeOfIdentification.
   * @throws HttpException if there's an error retrieving the TypeOfIdentification from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<TypeOfIdentification>,
  ): Promise<TypeOfIdentification[]> {
    try {
      return await this._context.typeOfIdentification.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new TypeOfIdentification in the database.
   * @param typeOfIdentification - The TypeOfIdentification object to create.
   * @returns A promise that resolves to the created TypeOfIdentification.
   * @throws HttpException if there's an error creating the TypeOfIdentification in the database.
   */
  async create(
    typeOfIdentification: TypeOfIdentification,
  ): Promise<TypeOfIdentification> {
    try {
      const TypeOfIdentificationData =
        await this._context.typeOfIdentification.create(typeOfIdentification);
      return {
        ...typeOfIdentification,
        ...TypeOfIdentificationData?.raw[0],
        ...TypeOfIdentificationData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a TypeOfIdentification by the provided criteria in the database.
   * @param options - The criteria to find the TypeOfIdentification.
   * @returns A promise that resolves to the found TypeOfIdentification.
   * @throws HttpException if there's an error finding the TypeOfIdentification in the database.
   */
  async getOne(
    options: GetOneCriteriaType<TypeOfIdentification>,
  ): Promise<TypeOfIdentification> {
    try {
      return await this._context.typeOfIdentification.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a TypeOfIdentification in the database.
   * @param criteria - The criteria to find the TypeOfIdentification to update.
   * @param typeOfIdentification - The updated TypeOfIdentification object.
   * @returns A promise that resolves to the updated TypeOfIdentification.
   * @throws HttpException if there's an error updating the TypeOfIdentification in the database.
   */
  async update(
    criteria: UpdateCriteriaType<TypeOfIdentification>,
    typeOfIdentification: TypeOfIdentification,
  ): Promise<TypeOfIdentification> {
    try {
      const updateTypeOfIdentification =
        await this._context.typeOfIdentification.update(
          criteria,
          typeOfIdentification,
        );
      return {
        ...typeOfIdentification,
        ...updateTypeOfIdentification?.raw[0],
        ...updateTypeOfIdentification?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a TypeOfIdentification from the database.
   * @param criteria - The criteria to find the TypeOfIdentification to delete.
   * @returns A promise that resolves to the deleted TypeOfIdentification.
   * @throws HttpException if there's an error deleting the TypeOfIdentification from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<TypeOfIdentification>,
  ): Promise<TypeOfIdentification> {
    try {
      const deleteTypeOfIdentification =
        await this._context.typeOfIdentification.delete(criteria);
      return { ...deleteTypeOfIdentification?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a TypeOfIdentification in the database.
   * @param typeOfIdentification - The TypeOfIdentification object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved TypeOfIdentification.
   * @throws HttpException if there's an error saving the TypeOfIdentification in the database.
   */
  async save(
    typeOfIdentification: TypeOfIdentification,
    options?: SaveOptionsType<TypeOfIdentification>,
  ): Promise<TypeOfIdentification> {
    try {
      const TypeOfIdentificationaved =
        await this._context.typeOfIdentification.save(
          typeOfIdentification,
          options,
        );
      return TypeOfIdentificationaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
  /**
   * Encuentra un tipo de identificación por su ID.
   * @param id_typeIdentification - El ID del tipo de identificación a buscar.
   * @returns El tipo de identificación encontrado o null si no existe.
   * @throws HttpException si hay un error en la base de datos.
   */
  async getById(
    id_typeIdentification: number,
  ): Promise<TypeOfIdentification | null> {
    try {
      return await this._context.typeOfIdentification.getOne({
        where: { id_typeIdentification },
      });
    } catch (error) {
      throw new HttpException(
        `Error al obtener el tipo de identificación: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
