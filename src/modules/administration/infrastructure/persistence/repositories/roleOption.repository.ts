import { HttpException, Injectable, Scope } from '@nestjs/common';

import { RoleOption } from 'src/modules/administration/domain/RoleOption/RoleOption.entity';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';

/**
 * Represents a RoleOption repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class RoleOptionRepository {
  /**
   * Creates a new instance of RoleOptionRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all RoleOptions from the database.
   * @param options - Optional criteria to filter the RoleOptions.
   * @returns A promise that resolves to an array of RoleOptions.
   * @throws HttpException if there's an error retrieving the RoleOptions from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<RoleOption>,
  ): Promise<RoleOption[]> {
    try {
      return await this._context.roleOption.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new RoleOption in the database.
   * @param RoleOption - The RoleOption object to create.
   * @returns A promise that resolves to the created RoleOption.
   * @throws HttpException if there's an error creating the RoleOption in the database.
   */
  async create(RoleOption: RoleOption): Promise<RoleOption> {
    try {
      const RoleOptionData = await this._context.roleOption.create(RoleOption);
      return {
        ...RoleOption,
        ...RoleOptionData?.raw[0],
        ...RoleOptionData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a RoleOption by the provided criteria in the database.
   * @param options - The criteria to find the RoleOption.
   * @returns A promise that resolves to the found RoleOption.
   * @throws HttpException if there's an error finding the RoleOption in the database.
   */
  async getOne(options: GetOneCriteriaType<RoleOption>): Promise<RoleOption> {
    try {
      return await this._context.roleOption.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a RoleOption in the database.
   * @param criteria - The criteria to find the RoleOption to update.
   * @param RoleOption - The updated RoleOption object.
   * @returns A promise that resolves to the updated RoleOption.
   * @throws HttpException if there's an error updating the RoleOption in the database.
   */
  async update(
    criteria: UpdateCriteriaType<RoleOption>,
    RoleOption: RoleOption,
  ): Promise<RoleOption> {
    try {
      const updateRoleOption = await this._context.roleOption.update(
        criteria,
        RoleOption,
      );
      return {
        ...RoleOption,
        ...updateRoleOption?.raw[0],
        ...updateRoleOption?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a RoleOption from the database.
   * @param criteria - The criteria to find the RoleOption to delete.
   * @returns A promise that resolves to the deleted RoleOption.
   * @throws HttpException if there's an error deleting the RoleOption from the database.
   */
  async delete(criteria: DeleteCriteriaType<RoleOption>): Promise<RoleOption> {
    try {
      const deleteRoleOption = await this._context.roleOption.delete(criteria);
      return { ...deleteRoleOption?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a RoleOption in the database.
   * @param RoleOption - The RoleOption object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved RoleOption.
   * @throws HttpException if there's an error saving the RoleOption in the database.
   */
  async save(
    RoleOption: RoleOption,
    options?: SaveOptionsType<RoleOption>,
  ): Promise<RoleOption> {
    try {
      const RoleOptionSaved = await this._context.roleOption.save(
        RoleOption,
        options,
      );
      return RoleOptionSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
