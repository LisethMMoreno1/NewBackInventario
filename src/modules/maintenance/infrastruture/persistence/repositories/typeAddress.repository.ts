import { HttpException, Injectable, Scope } from '@nestjs/common';

import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { MaintenanceContext } from '../context/maintenaceContext.service';
import { TypeOfAddress } from 'src/modules/maintenance/domain/type-of-address/typeAddress.entity';

/**
 * Represents a TypeOfAddress repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class TypeOfAddressRepository {
  /**
   * Creates a new instance of TypeOfAddressRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: MaintenanceContext) {}

  /**
   * Retrieves all TypeOfAddress from the database.
   * @param options - Optional criteria to filter the TypeOfAddress.
   * @returns A promise that resolves to an array of TypeOfAddress.
   * @throws HttpException if there's an error retrieving the TypeOfAddress from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<TypeOfAddress>,
  ): Promise<TypeOfAddress[]> {
    try {
      return await this._context.typeOfAddress.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new TypeOfAddress in the database.
   * @param typeOfAddress - The TypeOfAddress object to create.
   * @returns A promise that resolves to the created TypeOfAddress.
   * @throws HttpException if there's an error creating the TypeOfAddress in the database.
   */
  async create(typeOfAddress: TypeOfAddress): Promise<TypeOfAddress> {
    try {
      const TypeOfAddressData =
        await this._context.typeOfAddress.create(typeOfAddress);
      return {
        ...typeOfAddress,
        ...TypeOfAddressData?.raw[0],
        ...TypeOfAddressData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a TypeOfAddress by the provided criteria in the database.
   * @param options - The criteria to find the TypeOfAddress.
   * @returns A promise that resolves to the found TypeOfAddress.
   * @throws HttpException if there's an error finding the TypeOfAddress in the database.
   */
  async getOne(
    options: GetOneCriteriaType<TypeOfAddress>,
  ): Promise<TypeOfAddress> {
    try {
      return await this._context.typeOfAddress.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a TypeOfAddress in the database.
   * @param criteria - The criteria to find the TypeOfAddress to update.
   * @param typeOfAddress - The updated TypeOfAddress object.
   * @returns A promise that resolves to the updated TypeOfAddress.
   * @throws HttpException if there's an error updating the TypeOfAddress in the database.
   */
  async update(
    criteria: UpdateCriteriaType<TypeOfAddress>,
    TypeOfAddress: TypeOfAddress,
  ): Promise<TypeOfAddress> {
    try {
      const updateTypeOfAddress = await this._context.typeOfAddress.update(
        criteria,
        TypeOfAddress,
      );
      return {
        ...TypeOfAddress,
        ...updateTypeOfAddress?.raw[0],
        ...updateTypeOfAddress?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a TypeOfAddress from the database.
   * @param criteria - The criteria to find the TypeOfAddress to delete.
   * @returns A promise that resolves to the deleted TypeOfAddress.
   * @throws HttpException if there's an error deleting the TypeOfAddress from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<TypeOfAddress>,
  ): Promise<TypeOfAddress> {
    try {
      const deleteTypeOfAddress =
        await this._context.typeOfAddress.delete(criteria);
      return { ...deleteTypeOfAddress?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a TypeOfAddress in the database.
   * @param typeOfAddress - The TypeOfAddress object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved TypeOfAddress.
   * @throws HttpException if there's an error saving the TypeOfAddress in the database.
   */
  async save(
    TypeOfAddress: TypeOfAddress,
    options?: SaveOptionsType<TypeOfAddress>,
  ): Promise<TypeOfAddress> {
    try {
      const TypeOfAddressaved = await this._context.typeOfAddress.save(
        TypeOfAddress,
        options,
      );
      return TypeOfAddressaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
