import { HttpException, Injectable, Scope } from '@nestjs/common';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';
import { OrderStatus } from 'src/modules/administration/domain/orderStatus/orderStatus.entity';

/**
 * Represents a OrderStatus repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class OrderStatusRepository {
  /**
   * Creates a new instance of OrderStatusRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all OrderStatuss from the database.
   * @param options - Optional criteria to filter the OrderStatuss.
   * @returns A promise that resolves to an array of OrderStatuss.
   * @throws HttpException if there's an error retrieving the OrderStatuss from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<OrderStatus>,
  ): Promise<OrderStatus[]> {
    try {
      return await this._context.orderStatus.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new OrderStatus in the database.
   * @param OrderStatus - The OrderStatus object to create.
   * @returns A promise that resolves to the created OrderStatus.
   * @throws HttpException if there's an error creating the OrderStatus in the database.
   */
  async create(OrderStatus: OrderStatus): Promise<OrderStatus> {
    try {
      const OrderStatusData =
        await this._context.orderStatus.create(OrderStatus);
      return {
        ...OrderStatus,
        ...OrderStatusData?.raw[0],
        ...OrderStatusData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a OrderStatus by the provided criteria in the database.
   * @param options - The criteria to find the OrderStatus.
   * @returns A promise that resolves to the found OrderStatus.
   * @throws HttpException if there's an error finding the OrderStatus in the database.
   */
  async getOne(options: GetOneCriteriaType<OrderStatus>): Promise<OrderStatus> {
    try {
      return await this._context.orderStatus.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a OrderStatus in the database.
   * @param criteria - The criteria to find the OrderStatus to update.
   * @param OrderStatus - The updated OrderStatus object.
   * @returns A promise that resolves to the updated OrderStatus.
   * @throws HttpException if there's an error updating the OrderStatus in the database.
   */
  async update(
    criteria: UpdateCriteriaType<OrderStatus>,
    OrderStatus: OrderStatus,
  ): Promise<OrderStatus> {
    try {
      const updateOrderStatus = await this._context.orderStatus.update(
        criteria,
        OrderStatus,
      );
      return {
        ...OrderStatus,
        ...updateOrderStatus?.raw[0],
        ...updateOrderStatus?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a OrderStatus from the database.
   * @param criteria - The criteria to find the OrderStatus to delete.
   * @returns A promise that resolves to the deleted OrderStatus.
   * @throws HttpException if there's an error deleting the OrderStatus from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<OrderStatus>,
  ): Promise<OrderStatus> {
    try {
      const deleteOrderStatus =
        await this._context.orderStatus.delete(criteria);
      return { ...deleteOrderStatus?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a OrderStatus in the database.
   * @param OrderStatus - The OrderStatus object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved OrderStatus.
   * @throws HttpException if there's an error saving the OrderStatus in the database.
   */
  async save(
    OrderStatus: OrderStatus,
    options?: SaveOptionsType<OrderStatus>,
  ): Promise<OrderStatus> {
    try {
      const OrderStatusSaved = await this._context.orderStatus.save(
        OrderStatus,
        options,
      );
      return OrderStatusSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
