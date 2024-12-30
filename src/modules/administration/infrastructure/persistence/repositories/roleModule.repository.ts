import { HttpException, Injectable, Scope } from '@nestjs/common';

import { RoleModule } from 'src/modules/administration/domain/RoleModule/RoleModule.entity';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';

/**
 * Represents a RoleModule repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class RoleModuleRepository {
  /**
   * Creates a new instance of RoleModuleRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all RoleModules from the database.
   * @param options - Optional criteria to filter the RoleModules.
   * @returns A promise that resolves to an array of RoleModules.
   * @throws HttpException if there's an error retrieving the RoleModules from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<RoleModule>,
  ): Promise<RoleModule[]> {
    try {
      return await this._context.roleModule.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new RoleModule in the database.
   * @param RoleModule - The RoleModule object to create.
   * @returns A promise that resolves to the created RoleModule.
   * @throws HttpException if there's an error creating the RoleModule in the database.
   */
  async create(RoleModule: RoleModule): Promise<RoleModule> {
    try {
      const RoleModuleData = await this._context.roleModule.create(RoleModule);
      return {
        ...RoleModule,
        ...RoleModuleData?.raw[0],
        ...RoleModuleData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a RoleModule by the provided criteria in the database.
   * @param options - The criteria to find the RoleModule.
   * @returns A promise that resolves to the found RoleModule.
   * @throws HttpException if there's an error finding the RoleModule in the database.
   */
  async getOne(options: GetOneCriteriaType<RoleModule>): Promise<RoleModule> {
    try {
      return await this._context.roleModule.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a RoleModule in the database.
   * @param criteria - The criteria to find the RoleModule to update.
   * @param RoleModule - The updated RoleModule object.
   * @returns A promise that resolves to the updated RoleModule.
   * @throws HttpException if there's an error updating the RoleModule in the database.
   */
  async update(
    criteria: UpdateCriteriaType<RoleModule>,
    RoleModule: RoleModule,
  ): Promise<RoleModule> {
    try {
      const updateRoleModule = await this._context.roleModule.update(
        criteria,
        RoleModule,
      );
      return {
        ...RoleModule,
        ...updateRoleModule?.raw[0],
        ...updateRoleModule?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a RoleModule from the database.
   * @param criteria - The criteria to find the RoleModule to delete.
   * @returns A promise that resolves to the deleted RoleModule.
   * @throws HttpException if there's an error deleting the RoleModule from the database.
   */
  async delete(criteria: DeleteCriteriaType<RoleModule>): Promise<RoleModule> {
    try {
      const deleteRoleModule = await this._context.roleModule.delete(criteria);
      return { ...deleteRoleModule?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a RoleModule in the database.
   * @param RoleModule - The RoleModule object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved RoleModule.
   * @throws HttpException if there's an error saving the RoleModule in the database.
   */
  async save(
    RoleModule: RoleModule,
    options?: SaveOptionsType<RoleModule>,
  ): Promise<RoleModule> {
    try {
      const RoleModuleSaved = await this._context.roleModule.save(
        RoleModule,
        options,
      );
      return RoleModuleSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
