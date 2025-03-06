import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderRequestDto } from 'src/modules/administration/domain/order/DTO/order-request.dto';
import { Order } from 'src/modules/administration/domain/order/order.entity';
import { OrderRepository } from 'src/modules/administration/infrastructure/persistence/repositories/order.repository';

@Injectable()
export class UpdateOrderService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _orderRepository: OrderRepository,
  ) {}

  async handle(
    identifier: number | string,
    orderRequest: OrderRequestDto,
  ): Promise<Order> {
    // Buscar la orden por ID o por número de orden
    const order = await this._orderRepository.getOne({
      where:
        typeof identifier === 'number'
          ? { id: identifier }
          : { orderNumber: identifier },
    });

    if (!order) {
      throw new NotFoundException(
        `Order with identifier ${identifier} not found`,
      );
    }

    // Mantener el número de orden sin cambios
    const updatedOrder = this._mapper.map(orderRequest, OrderRequestDto, Order);
    updatedOrder.id = order.id; // Mantiene el ID original
    updatedOrder.orderNumber = order.orderNumber; // Mantiene el número de orden original
    updatedOrder.status = orderRequest.status ?? order.status; // Si no se envía status, mantiene el actual

    return await this._orderRepository.save(updatedOrder);
  }
}
