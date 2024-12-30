import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { OrderRequestDto } from 'src/modules/administration/domain/orders/DTO/orders-request.dto';
import { OrderResponseDto } from 'src/modules/administration/domain/orders/DTO/orders-response.dto';
import { Order } from 'src/modules/administration/domain/orders/orders.entity';

/**
 * User profile
 */
@Injectable()
export class OrdersProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, Order, OrderResponseDto);
      createMap(mapper, OrderRequestDto, Order);
    };
  }
}
