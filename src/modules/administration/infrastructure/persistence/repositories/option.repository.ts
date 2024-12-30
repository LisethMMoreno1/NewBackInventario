import { HttpException, Injectable, Scope } from '@nestjs/common';

import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';
import { Option } from 'src/modules/administration/domain/Option/Option.entity';

/**
 * Represents a Option repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class OptionRepository {
  /**
   * Creates a new instance of OptionRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all Options from the database.
   * @param options - Optional criteria to filter the Options.
   * @returns A promise that resolves to an array of Options.
   * @throws HttpException if there's an error retrieving the Options from the database.
   */
  async getAll(options?: GetAllCriteriaType<Option>): Promise<Option[]> {
    try {
      return await this._context.option.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new Option in the database.
   * @param Option - The Option object to create.
   * @returns A promise that resolves to the created Option.
   * @throws HttpException if there's an error creating the Option in the database.
   */
  async create(Option: Option): Promise<Option> {
    try {
      const OptionData = await this._context.option.create(Option);
      return {
        ...Option,
        ...OptionData?.raw[0],
        ...OptionData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a Option by the provided criteria in the database.
   * @param options - The criteria to find the Option.
   * @returns A promise that resolves to the found Option.
   * @throws HttpException if there's an error finding the Option in the database.
   */
  async getOne(options: GetOneCriteriaType<Option>): Promise<Option> {
    try {
      return await this._context.option.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a Option in the database.
   * @param criteria - The criteria to find the Option to update.
   * @param Option - The updated Option object.
   * @returns A promise that resolves to the updated Option.
   * @throws HttpException if there's an error updating the Option in the database.
   */
  async update(
    criteria: UpdateCriteriaType<Option>,
    Option: Option,
  ): Promise<Option> {
    try {
      const updateOption = await this._context.option.update(criteria, Option);
      return {
        ...Option,
        ...updateOption?.raw[0],
        ...updateOption?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a Option from the database.
   * @param criteria - The criteria to find the Option to delete.
   * @returns A promise that resolves to the deleted Option.
   * @throws HttpException if there's an error deleting the Option from the database.
   */
  async delete(criteria: DeleteCriteriaType<Option>): Promise<Option> {
    try {
      const deleteOption = await this._context.option.delete(criteria);
      return { ...deleteOption?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a Option in the database.
   * @param Option - The Option object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved Option.
   * @throws HttpException if there's an error saving the Option in the database.
   */
  async save(
    Option: Option,
    options?: SaveOptionsType<Option>,
  ): Promise<Option> {
    try {
      const OptionSaved = await this._context.option.save(Option, options);
      return OptionSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
