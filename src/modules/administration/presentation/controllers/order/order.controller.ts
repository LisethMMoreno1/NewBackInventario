import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderRequestDto } from 'src/modules/administration/domain/order/DTO/order-request.dto';
import { Order } from 'src/modules/administration/domain/order/order.entity';
import { CreateOrderService } from 'src/modules/administration/services/useCases/order/createOrder.service';
import { DeleteOrderService } from 'src/modules/administration/services/useCases/order/deleteOrder.service';
import { GetAllOrdersService } from 'src/modules/administration/services/useCases/order/getAllOrder.service';
import { GetOneOrderService } from 'src/modules/administration/services/useCases/order/getOneOrder.service';
import { UpdateOrderService } from 'src/modules/administration/services/useCases/order/updateOrder.service';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly _createOrderService: CreateOrderService,
    private readonly _deleteOrderService: DeleteOrderService,
    private readonly _getAllOrdersService: GetAllOrdersService,
    private readonly _getOneOrderService: GetOneOrderService,
    private readonly _updateOrderService: UpdateOrderService,
  ) {}

  // 📌 Crear una orden
  @Post()
  async create(@Body() orderRequest: OrderRequestDto): Promise<Order> {
    return await this._createOrderService.handle(orderRequest);
  }

  // 📌 Obtener todas las órdenes
  @Get()
  async getAll(): Promise<Order[]> {
    return await this._getAllOrdersService.handle();
  }

  // 📌 Obtener una orden por ID
  @Get(':identifier')
  async getOneOrder(@Param('identifier') identifier: string): Promise<Order> {
    // Convertir a número si es posible, de lo contrario, mantenerlo como string
    const searchParam = !isNaN(+identifier) ? +identifier : identifier;

    return this._getOneOrderService.handle(searchParam);
  }

  // 📌 Actualizar una orden (sin modificar el número de orden)
  @Put(':identifier')
  async updateOrder(
    @Param('identifier') identifier: string,
    @Body() orderRequest: OrderRequestDto,
  ): Promise<Order> {
    // Convertir a número si es posible, de lo contrario, mantenerlo como string
    const searchParam = !isNaN(+identifier) ? +identifier : identifier;

    return this._updateOrderService.handle(searchParam, orderRequest);
  }

  // 📌 Eliminar una orden por ID
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this._deleteOrderService.handle(id);
  }
}
