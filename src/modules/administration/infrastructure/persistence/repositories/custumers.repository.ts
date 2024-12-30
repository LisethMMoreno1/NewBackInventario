import { HttpException, Injectable, Scope } from '@nestjs/common';

import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';
import { Customers } from 'src/modules/administration/domain/customers/customers.entity';

/**
 * Represents a Customers repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class CustumersRepository {
  /**
   * Creates a new instance of CustomersRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all Customerss from the database.
   * @param options - Optional criteria to filter the Customerss.
   * @returns A promise that resolves to an array of Customerss.
   * @throws HttpException if there's an error retrieving the Customerss from the database.
   */
  async getAll(options?: GetAllCriteriaType<Customers>): Promise<Customers[]> {
    try {
      return await this._context.customers.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new Customers in the database.
   * @param Customers - The Customers object to create.
   * @returns A promise that resolves to the created Customers.
   * @throws HttpException if there's an error creating the Customers in the database.
   */
  async create(Customers: Customers): Promise<Customers> {
    try {
      const CustomersData = await this._context.customers.create(Customers);
      return {
        ...Customers,
        ...CustomersData?.raw[0],
        ...CustomersData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a Customers by the provided criteria in the database.
   * @param options - The criteria to find the Customers.
   * @returns A promise that resolves to the found Customers.
   * @throws HttpException if there's an error finding the Customers in the database.
   */
  async getOne(options: GetOneCriteriaType<Customers>): Promise<Customers> {
    try {
      return await this._context.customers.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a Customers in the database.
   * @param criteria - The criteria to find the Customers to update.
   * @param Customers - The updated Customers object.
   * @returns A promise that resolves to the updated Customers.
   * @throws HttpException if there's an error updating the Customers in the database.
   */
  async update(
    criteria: UpdateCriteriaType<Customers>,
    Customers: Customers,
  ): Promise<Customers> {
    try {
      const updateCustomers = await this._context.customers.update(
        criteria,
        Customers,
      );
      return {
        ...Customers,
        ...updateCustomers?.raw[0],
        ...updateCustomers?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a Customers from the database.
   * @param criteria - The criteria to find the Customers to delete.
   * @returns A promise that resolves to the deleted Customers.
   * @throws HttpException if there's an error deleting the Customers from the database.
   */
  async delete(criteria: DeleteCriteriaType<Customers>): Promise<Customers> {
    try {
      const deleteCustomers = await this._context.customers.delete(criteria);
      return { ...deleteCustomers?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a Customers in the database.
   * @param Customers - The Customers object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved Customers.
   * @throws HttpException if there's an error saving the Customers in the database.
   */
  async save(
    Customers: Customers,
    options?: SaveOptionsType<Customers>,
  ): Promise<Customers> {
    try {
      const CustomersSaved = await this._context.customers.save(
        Customers,
        options,
      );
      return CustomersSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
