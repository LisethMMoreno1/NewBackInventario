import { HttpException, Injectable, Scope } from '@nestjs/common';
import { Order } from 'src/modules/administration/domain/Order/Order.entity';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  constructor(private readonly _context: AdministrationContext) {}

  async getAll(options?: GetAllCriteriaType<Order>): Promise<Order[]> {
    try {
      return await this._context.order.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async create(Order: Order): Promise<Order> {
    try {
      const OrderData = await this._context.order.create(Order);
      const rawData = OrderData?.raw?.[0] ?? {};
      const generatedMaps = OrderData?.generatedMaps?.[0] ?? {};
      return {
        ...Order,
        ...rawData,
        ...generatedMaps,
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async getOne(options: GetOneCriteriaType<Order>): Promise<Order | null> {
    try {
      const order = await this._context.order.getOne(options);
      return order ?? null; // Si no encuentra nada, retorna null
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async update(
    criteria: UpdateCriteriaType<Order>,
    Order: Order,
  ): Promise<Order> {
    try {
      const updateOrder = await this._context.order.update(criteria, Order);
      return {
        ...Order,
        ...(updateOrder?.raw?.[0] ?? {}),
        ...(updateOrder?.generatedMaps?.[0] ?? {}),
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async delete(criteria: DeleteCriteriaType<Order>): Promise<Order | null> {
    try {
      const deleteOrder = await this._context.order.delete(criteria);
      return deleteOrder?.raw?.[0] ?? null;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async save(Order: Order, options?: SaveOptionsType<Order>): Promise<Order> {
    try {
      return await this._context.order.save(Order, options);
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(`Error de DB: ${error.message}`, 500);
      } else {
        throw new HttpException('Error desconocido', 500);
      }
    }
  }

  async getByIdentificationNumber(id: number): Promise<Order | null> {
    return this.getOne({ where: { id } });
  }

  async getLastOrder(): Promise<Order | null> {
    try {
      const lastOrder = await this._context.order.getOne({
        where: {}, // No hay condiciones específicas, solo queremos el último
        order: { id: 'DESC' }, // Ordenar por ID descendente
      });

      return lastOrder ?? null;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }
}
