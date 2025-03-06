import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from 'src/modules/administration/domain/order/order.entity';
import { OrderRepository } from 'src/modules/administration/infrastructure/persistence/repositories/order.repository';

@Injectable()
export class GetOneOrderService {
  constructor(private readonly _orderRepository: OrderRepository) {}

  async handle(identifier: number | string): Promise<Order> {
    // Determinar si el identificador es un número (ID) o un string (orderNumber)
    const whereCondition =
      typeof identifier === 'number'
        ? { id: identifier }
        : { orderNumber: identifier };

    // Buscar la orden con la condición adecuada
    const order = await this._orderRepository.getOne({ where: whereCondition });

    if (!order) {
      throw new NotFoundException(
        `Order with ${typeof identifier === 'number' ? 'ID' : 'Order Number'} ${identifier} not found`,
      );
    }

    return order;
  }
}
