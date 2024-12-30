import { HttpException, Injectable, Scope } from '@nestjs/common';

import { AdministrationContext } from '../context/administrationContext.service';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { Payment } from 'src/modules/administration/domain/payment/payment.entity';

/**
 * Represents a Payment repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class PaymentRepository {
  /**
   * Creates a new instance of PaymentRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all Payments from the database.
   * @param options - Optional criteria to filter the Payments.
   * @returns A promise that resolves to an array of Payments.
   * @throws HttpException if there's an error retrieving the Payments from the database.
   */
  async getAll(options?: GetAllCriteriaType<Payment>): Promise<Payment[]> {
    try {
      return await this._context.payment.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new Payment in the database.
   * @param Payment - The Payment object to create.
   * @returns A promise that resolves to the created Payment.
   * @throws HttpException if there's an error creating the Payment in the database.
   */
  async create(Payment: Payment): Promise<Payment> {
    try {
      const PaymentData = await this._context.payment.create(Payment);
      return {
        ...Payment,
        ...PaymentData?.raw[0],
        ...PaymentData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a Payment by the provided criteria in the database.
   * @param options - The criteria to find the Payment.
   * @returns A promise that resolves to the found Payment.
   * @throws HttpException if there's an error finding the Payment in the database.
   */
  async getOne(options: GetOneCriteriaType<Payment>): Promise<Payment> {
    try {
      return await this._context.payment.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a Payment in the database.
   * @param criteria - The criteria to find the Payment to update.
   * @param Payment - The updated Payment object.
   * @returns A promise that resolves to the updated Payment.
   * @throws HttpException if there's an error updating the Payment in the database.
   */
  async update(
    criteria: UpdateCriteriaType<Payment>,
    Payment: Payment,
  ): Promise<Payment> {
    try {
      const updatePayment = await this._context.payment.update(
        criteria,
        Payment,
      );
      return {
        ...Payment,
        ...updatePayment?.raw[0],
        ...updatePayment?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a Payment from the database.
   * @param criteria - The criteria to find the Payment to delete.
   * @returns A promise that resolves to the deleted Payment.
   * @throws HttpException if there's an error deleting the Payment from the database.
   */
  async delete(criteria: DeleteCriteriaType<Payment>): Promise<Payment> {
    try {
      const deletePayment = await this._context.payment.delete(criteria);
      return { ...deletePayment?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a Payment in the database.
   * @param Payment - The Payment object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved Payment.
   * @throws HttpException if there's an error saving the Payment in the database.
   */
  async save(
    Payment: Payment,
    options?: SaveOptionsType<Payment>,
  ): Promise<Payment> {
    try {
      const PaymentSaved = await this._context.payment.save(Payment, options);
      return PaymentSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
