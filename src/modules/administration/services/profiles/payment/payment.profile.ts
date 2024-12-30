import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { PaymentRequestDto } from 'src/modules/administration/domain/payment/DTO/payment-request.dto';
import { PaymentResponseDto } from 'src/modules/administration/domain/payment/DTO/payment-response.dto';
import { Payment } from 'src/modules/administration/domain/payment/payment.entity';

/**
 * User profile
 */
@Injectable()
export class PaymentProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, Payment, PaymentResponseDto);
      createMap(mapper, PaymentRequestDto, Payment);
    };
  }
}
