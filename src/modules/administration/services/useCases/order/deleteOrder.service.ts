import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderRepository } from 'src/modules/administration/infrastructure/persistence/repositories/order.repository';

@Injectable()
export class DeleteOrderService {
  constructor(private readonly _orderRepository: OrderRepository) {}

  async handle(id: number): Promise<void> {
    const order = await this._orderRepository.getOne({ where: { id } });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    await this._orderRepository.delete(id);
  }
}
