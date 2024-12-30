import { HttpException, Injectable, Scope } from '@nestjs/common';

import { AdministrationContext } from '../context/administrationContext.service';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { Order } from 'src/modules/administration/domain/orders/orders.entity';

/**
 * Represents a Order repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  /**
   * Creates a new instance of OrderRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all Orders from the database.
   * @param options - Optional criteria to filter the Orders.
   * @returns A promise that resolves to an array of Orders.
   * @throws HttpException if there's an error retrieving the Orders from the database.
   */
  async getAll(options?: GetAllCriteriaType<Order>): Promise<Order[]> {
    try {
      return await this._context.order.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new Order in the database.
   * @param Order - The Order object to create.
   * @returns A promise that resolves to the created Order.
   * @throws HttpException if there's an error creating the Order in the database.
   */
  async create(Order: Order): Promise<Order> {
    try {
      const OrderData = await this._context.order.create(Order);
      return {
        ...Order,
        ...OrderData?.raw[0],
        ...OrderData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a Order by the provided criteria in the database.
   * @param options - The criteria to find the Order.
   * @returns A promise that resolves to the found Order.
   * @throws HttpException if there's an error finding the Order in the database.
   */
  async getOne(options: GetOneCriteriaType<Order>): Promise<Order> {
    try {
      return await this._context.order.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a Order in the database.
   * @param criteria - The criteria to find the Order to update.
   * @param Order - The updated Order object.
   * @returns A promise that resolves to the updated Order.
   * @throws HttpException if there's an error updating the Order in the database.
   */
  async update(
    criteria: UpdateCriteriaType<Order>,
    Order: Order,
  ): Promise<Order> {
    try {
      const updateOrder = await this._context.order.update(criteria, Order);
      return {
        ...Order,
        ...updateOrder?.raw[0],
        ...updateOrder?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a Order from the database.
   * @param criteria - The criteria to find the Order to delete.
   * @returns A promise that resolves to the deleted Order.
   * @throws HttpException if there's an error deleting the Order from the database.
   */
  async delete(criteria: DeleteCriteriaType<Order>): Promise<Order> {
    try {
      const deleteOrder = await this._context.order.delete(criteria);
      return { ...deleteOrder?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a Order in the database.
   * @param Order - The Order object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved Order.
   * @throws HttpException if there's an error saving the Order in the database.
   */
  async save(Order: Order, options?: SaveOptionsType<Order>): Promise<Order> {
    try {
      const OrderSaved = await this._context.order.save(Order, options);
      return OrderSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
