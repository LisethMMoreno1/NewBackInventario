import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { OrderDetailsRequestDto } from 'src/modules/administration/domain/orderDetails/DTO/orderDetails-request.dto';
import { OrderDetailsResponseDto } from 'src/modules/administration/domain/orderDetails/DTO/orderDetails-response.dto';
import { OrderDetails } from 'src/modules/administration/domain/orderDetails/orderDetails.entity';

/**
 * User profile
 */
@Injectable()
export class OrderDetailsProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, OrderDetails, OrderDetailsResponseDto);
      createMap(mapper, OrderDetailsRequestDto, OrderDetails);
    };
  }
}
