import { HttpException, Injectable, Scope } from '@nestjs/common';

import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';
import { Module } from 'src/modules/administration/domain/Module/Module.entity';

/**
 * Represents a Module repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class ModuleRepository {
  /**
   * Creates a new instance of ModuleRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all Modules from the database.
   * @param options - Optional criteria to filter the Modules.
   * @returns A promise that resolves to an array of Modules.
   * @throws HttpException if there's an error retrieving the Modules from the database.
   */
  async getAll(options?: GetAllCriteriaType<Module>): Promise<Module[]> {
    try {
      return await this._context.module.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new Module in the database.
   * @param module - The Module object to create.
   * @returns A promise that resolves to the created Module.
   * @throws HttpException if there's an error creating the Module in the database.
   */
  async create(module: Module): Promise<Module> {
    try {
      const moduleData = await this._context.module.create(module);
      return {
        ...module,
        ...moduleData?.raw[0],
        ...moduleData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a Module by the provided criteria in the database.
   * @param options - The criteria to find the Module.
   * @returns A promise that resolves to the found Module.
   * @throws HttpException if there's an error finding the Module in the database.
   */
  async getOne(options: GetOneCriteriaType<Module>): Promise<Module> {
    try {
      return await this._context.module.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a Module in the database.
   * @param criteria - The criteria to find the Module to update.
   * @param module - The updated Module object.
   * @returns A promise that resolves to the updated Module.
   * @throws HttpException if there's an error updating the Module in the database.
   */
  async update(
    criteria: UpdateCriteriaType<Module>,
    module: Module,
  ): Promise<Module> {
    try {
      const updateModule = await this._context.module.update(criteria, module);
      return {
        ...module,
        ...updateModule?.raw[0],
        ...updateModule?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a Module from the database.
   * @param criteria - The criteria to find the Module to delete.
   * @returns A promise that resolves to the deleted Module.
   * @throws HttpException if there's an error deleting the Module from the database.
   */
  async delete(criteria: DeleteCriteriaType<Module>): Promise<Module> {
    try {
      const deleteModule = await this._context.module.delete(criteria);
      return { ...deleteModule?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a Module in the database.
   * @param module - The Module object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved Module.
   * @throws HttpException if there's an error saving the Module in the database.
   */
  async save(
    module: Module,
    options?: SaveOptionsType<Module>,
  ): Promise<Module> {
    try {
      const moduleSaved = await this._context.module.save(module, options);
      return moduleSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
