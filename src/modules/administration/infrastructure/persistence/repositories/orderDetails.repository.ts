import { HttpException, Injectable, Scope } from '@nestjs/common';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';
import { OrderDetails } from 'src/modules/administration/domain/orderDetails/orderDetails.entity';

/**
 * Represents a OrderDetails repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class OrderDetailsRepository {
  /**
   * Creates a new instance of OrderDetailsRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all OrderDetailss from the database.
   * @param options - Optional criteria to filter the OrderDetailss.
   * @returns A promise that resolves to an array of OrderDetailss.
   * @throws HttpException if there's an error retrieving the OrderDetailss from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<OrderDetails>,
  ): Promise<OrderDetails[]> {
    try {
      return await this._context.orderDetails.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new OrderDetails in the database.
   * @param OrderDetails - The OrderDetails object to create.
   * @returns A promise that resolves to the created OrderDetails.
   * @throws HttpException if there's an error creating the OrderDetails in the database.
   */
  async create(OrderDetails: OrderDetails): Promise<OrderDetails> {
    try {
      const OrderDetailsData =
        await this._context.orderDetails.create(OrderDetails);
      return {
        ...OrderDetails,
        ...OrderDetailsData?.raw[0],
        ...OrderDetailsData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a OrderDetails by the provided criteria in the database.
   * @param options - The criteria to find the OrderDetails.
   * @returns A promise that resolves to the found OrderDetails.
   * @throws HttpException if there's an error finding the OrderDetails in the database.
   */
  async getOne(
    options: GetOneCriteriaType<OrderDetails>,
  ): Promise<OrderDetails> {
    try {
      return await this._context.orderDetails.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a OrderDetails in the database.
   * @param criteria - The criteria to find the OrderDetails to update.
   * @param OrderDetails - The updated OrderDetails object.
   * @returns A promise that resolves to the updated OrderDetails.
   * @throws HttpException if there's an error updating the OrderDetails in the database.
   */
  async update(
    criteria: UpdateCriteriaType<OrderDetails>,
    OrderDetails: OrderDetails,
  ): Promise<OrderDetails> {
    try {
      const updateOrderDetails = await this._context.orderDetails.update(
        criteria,
        OrderDetails,
      );
      return {
        ...OrderDetails,
        ...updateOrderDetails?.raw[0],
        ...updateOrderDetails?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a OrderDetails from the database.
   * @param criteria - The criteria to find the OrderDetails to delete.
   * @returns A promise that resolves to the deleted OrderDetails.
   * @throws HttpException if there's an error deleting the OrderDetails from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<OrderDetails>,
  ): Promise<OrderDetails> {
    try {
      const deleteOrderDetails =
        await this._context.orderDetails.delete(criteria);
      return { ...deleteOrderDetails?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a OrderDetails in the database.
   * @param OrderDetails - The OrderDetails object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved OrderDetails.
   * @throws HttpException if there's an error saving the OrderDetails in the database.
   */
  async save(
    OrderDetails: OrderDetails,
    options?: SaveOptionsType<OrderDetails>,
  ): Promise<OrderDetails> {
    try {
      const OrderDetailsSaved = await this._context.orderDetails.save(
        OrderDetails,
        options,
      );
      return OrderDetailsSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
