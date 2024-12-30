import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { OrderStatusRequestDto } from 'src/modules/administration/domain/orderStatus/DTO/orderStatus-request.dto';
import { OrderStatusResponseDto } from 'src/modules/administration/domain/orderStatus/DTO/orderStatus-response.dto';
import { OrderStatus } from 'src/modules/administration/domain/orderStatus/orderStatus.entity';

/**
 * User profile
 */
@Injectable()
export class orderStatusProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, OrderStatus, OrderStatusResponseDto);
      createMap(mapper, OrderStatusRequestDto, OrderStatus);
    };
  }
}
