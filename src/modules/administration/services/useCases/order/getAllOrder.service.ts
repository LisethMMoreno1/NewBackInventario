import { Injectable } from '@nestjs/common';
import { Order } from 'src/modules/administration/domain/order/order.entity';
import { OrderRepository } from 'src/modules/administration/infrastructure/persistence/repositories/order.repository';

@Injectable()
export class GetAllOrdersService {
  constructor(private readonly _orderRepository: OrderRepository) {}

  async handle(): Promise<Order[]> {
    return await this._orderRepository.getAll();
  }
}
