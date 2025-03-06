import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderUtils } from 'src/common/utils/modules/orderUtils';
import { OrderRequestDto } from 'src/modules/administration/domain/order/DTO/order-request.dto';
import { Order } from 'src/modules/administration/domain/order/order.entity';
import { OrderRepository } from 'src/modules/administration/infrastructure/persistence/repositories/order.repository';
import { VehicleDeliveryRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleDeliveryRecord.repository';
import { VehicleReceptionRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleReceptionRecord.repository';

@Injectable()
export class CreateOrderService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _orderRepository: OrderRepository,
    private readonly _vehicleReceptionRecordRepository: VehicleReceptionRecordRepository,
    private readonly _vehicleDeliveryRecordRepository: VehicleDeliveryRecordRepository,
  ) {}

  async handle(orderRequest: OrderRequestDto): Promise<Order> {
    console.log('Recibida petición para crear orden:', orderRequest);

    // Validación temprana del receptionRecordId
    if (!orderRequest.receptionRecordId) {
      throw new Error('El ID del registro de recepción es inválido.');
    }

    const receptionRecord = await this._vehicleReceptionRecordRepository.getOne(
      {
        where: { id: orderRequest.receptionRecordId },
      },
    );

    if (!receptionRecord) {
      throw new NotFoundException(
        `Registro de recepción con ID ${orderRequest.receptionRecordId} no encontrado.`,
      );
    }

    // Buscar el registro de entrega (opcional)
    let deliveryRecord = null;
    if (orderRequest.deliveryRecordId) {
      console.log(
        'Buscando VehicleDeliveryRecord con ID:',
        orderRequest.deliveryRecordId,
      );
      deliveryRecord = await this._vehicleDeliveryRecordRepository.getOne({
        where: { id: orderRequest.deliveryRecordId },
      });

      if (!deliveryRecord) {
        throw new NotFoundException(
          `Registro de entrega con ID ${orderRequest.deliveryRecordId} no encontrado.`,
        );
      }
      console.log('Registro de entrega encontrado:', deliveryRecord);
    }

    console.log('Reception Record ID:', orderRequest.receptionRecordId);
    console.log('Delivery Record ID:', orderRequest.deliveryRecordId);

    // Obtener la última orden
    console.log('Buscando la última orden...');
    const lastOrder = await this._orderRepository.getLastOrder();
    console.log('Última orden encontrada:', lastOrder);

    // Generar número de orden
    const newOrderNumber = OrderUtils.generateOrderNumber(
      lastOrder?.orderNumber ?? null,
    );
    console.log('Nuevo número de orden generado:', newOrderNumber);

    // Mapear la solicitud a la entidad Order
    const order = new Order();
    order.orderNumber = newOrderNumber; // <-- Asigna el número de orden aquí
    order.receptionRecord = receptionRecord;
    order.deliveryRecord = deliveryRecord || null;
    order.status = 'ACTIVO';
    order.workDetails = orderRequest.workDetails;
    order.cost = orderRequest.cost;

    console.log('Orden antes de guardar:', order);

    // Guardar en la base de datos
    console.log('Guardando la orden en la base de datos...');
    const savedOrder = await this._orderRepository.save(order);
    console.log('Orden guardada correctamente:', savedOrder);

    return savedOrder;
  }
}
