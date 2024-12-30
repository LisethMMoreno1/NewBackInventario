import { HttpException, Injectable, Scope } from '@nestjs/common';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';
import { Submodule } from 'src/modules/administration/domain/Submodule/Submodule.entity';

/**
 * Represents a Submodule repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class SubmoduleRepository {
  /**
   * Creates a new instance of SubmoduleRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all Submodules from the database.
   * @param options - Optional criteria to filter the Submodules.
   * @returns A promise that resolves to an array of Submodules.
   * @throws HttpException if there's an error retrieving the Submodules from the database.
   */
  async getAll(options?: GetAllCriteriaType<Submodule>): Promise<Submodule[]> {
    try {
      return await this._context.submodule.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new Submodule in the database.
   * @param Submodule - The Submodule object to create.
   * @returns A promise that resolves to the created Submodule.
   * @throws HttpException if there's an error creating the Submodule in the database.
   */
  async create(Submodule: Submodule): Promise<Submodule> {
    try {
      const SubmoduleData = await this._context.submodule.create(Submodule);
      return {
        ...Submodule,
        ...SubmoduleData?.raw[0],
        ...SubmoduleData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a Submodule by the provided criteria in the database.
   * @param options - The criteria to find the Submodule.
   * @returns A promise that resolves to the found Submodule.
   * @throws HttpException if there's an error finding the Submodule in the database.
   */
  async getOne(options: GetOneCriteriaType<Submodule>): Promise<Submodule> {
    try {
      return await this._context.submodule.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a Submodule in the database.
   * @param criteria - The criteria to find the Submodule to update.
   * @param Submodule - The updated Submodule object.
   * @returns A promise that resolves to the updated Submodule.
   * @throws HttpException if there's an error updating the Submodule in the database.
   */
  async update(
    criteria: UpdateCriteriaType<Submodule>,
    Submodule: Submodule,
  ): Promise<Submodule> {
    try {
      const updateSubmodule = await this._context.submodule.update(
        criteria,
        Submodule,
      );
      return {
        ...Submodule,
        ...updateSubmodule?.raw[0],
        ...updateSubmodule?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a Submodule from the database.
   * @param criteria - The criteria to find the Submodule to delete.
   * @returns A promise that resolves to the deleted Submodule.
   * @throws HttpException if there's an error deleting the Submodule from the database.
   */
  async delete(criteria: DeleteCriteriaType<Submodule>): Promise<Submodule> {
    try {
      const deleteSubmodule = await this._context.submodule.delete(criteria);
      return { ...deleteSubmodule?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a Submodule in the database.
   * @param Submodule - The Submodule object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved Submodule.
   * @throws HttpException if there's an error saving the Submodule in the database.
   */
  async save(
    Submodule: Submodule,
    options?: SaveOptionsType<Submodule>,
  ): Promise<Submodule> {
    try {
      const SubmoduleSaved = await this._context.submodule.save(
        Submodule,
        options,
      );
      return SubmoduleSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
