import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { OrderRequestDto } from 'src/modules/administration/domain/order/DTO/order-request.dto';
import { OrderResponseDto } from 'src/modules/administration/domain/order/DTO/order-response.dto';
import { Order } from 'src/modules/administration/domain/order/order.entity';

/**
 * User profile
 */
@Injectable()
export class OrderProfile extends AutomapperProfile {
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
