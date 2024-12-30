import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Customers } from 'src/modules/administration/domain/customers/customers.entity';
import { CustomerResponseDto } from 'src/modules/administration/domain/customers/DTO/customers-response.dto';

/**
 * User profile
 */
@Injectable()
export class CustomersProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, Customers, CustomerResponseDto);
      createMap(mapper, CustomerResponseDto, Customers);
    };
  }
}
