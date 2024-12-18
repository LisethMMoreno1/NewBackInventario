import { HttpException, Injectable, Scope } from '@nestjs/common';

import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { MaintenanceContext } from '../context/maintenaceContext.service';
import { Bank } from 'src/modules/maintenance/domain/bank/bank.entity';

/**
 * Represents a Bank repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class BankRepository {
  /**
   * Creates a new instance of BankRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: MaintenanceContext) {}

  /**
   * Retrieves all Banks from the database.
   * @param options - Optional criteria to filter the Banks.
   * @returns A promise that resolves to an array of Banks.
   * @throws HttpException if there's an error retrieving the Banks from the database.
   */
  async getAll(options?: GetAllCriteriaType<Bank>): Promise<Bank[]> {
    try {
      return await this._context.bank.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new Bank in the database.
   * @param Bank - The Bank object to create.
   * @returns A promise that resolves to the created Bank.
   * @throws HttpException if there's an error creating the Bank in the database.
   */
  async create(Bank: Bank): Promise<Bank> {
    try {
      const BankData = await this._context.bank.create(Bank);
      return {
        ...Bank,
        ...BankData?.raw[0],
        ...BankData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a Bank by the provided criteria in the database.
   * @param options - The criteria to find the Bank.
   * @returns A promise that resolves to the found Bank.
   * @throws HttpException if there's an error finding the Bank in the database.
   */
  async getOne(options: GetOneCriteriaType<Bank>): Promise<Bank> {
    try {
      return await this._context.bank.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a Bank in the database.
   * @param criteria - The criteria to find the Bank to update.
   * @param Bank - The updated Bank object.
   * @returns A promise that resolves to the updated Bank.
   * @throws HttpException if there's an error updating the Bank in the database.
   */
  async update(criteria: UpdateCriteriaType<Bank>, Bank: Bank): Promise<Bank> {
    try {
      const updateBank = await this._context.bank.update(criteria, Bank);
      return {
        ...Bank,
        ...updateBank?.raw[0],
        ...updateBank?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a Bank from the database.
   * @param criteria - The criteria to find the Bank to delete.
   * @returns A promise that resolves to the deleted Bank.
   * @throws HttpException if there's an error deleting the Bank from the database.
   */
  async delete(criteria: DeleteCriteriaType<Bank>): Promise<Bank> {
    try {
      const deleteBank = await this._context.bank.delete(criteria);
      return { ...deleteBank?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a Bank in the database.
   * @param Bank - The Bank object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved Bank.
   * @throws HttpException if there's an error saving the Bank in the database.
   */
  async save(Bank: Bank, options?: SaveOptionsType<Bank>): Promise<Bank> {
    try {
      const BankSaved = await this._context.bank.save(Bank, options);
      return BankSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
