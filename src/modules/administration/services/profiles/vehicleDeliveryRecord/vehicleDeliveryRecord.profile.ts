import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { VehicleDeliveryRecordResponseDto } from 'src/modules/administration/domain/VehicleDeliveryRecord/DTO/VehicleDeliveryRecord-response.dto';
import { VehicleDeliveryRecordRequestDto } from 'src/modules/administration/domain/vehicleDeliveryRecord/DTO/vehicleDeliveryRecord-resquest.dto';
import { VehicleDeliveryRecord } from 'src/modules/administration/domain/VehicleDeliveryRecord/VehicleDeliveryRecord.entity';

/**
 * VehicleDeliveryRecord profile
 */
@Injectable()
export class VehicleDeliveryRecordProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      console.log('Configurando el mapeo entre DTO y Entidad...');

      createMap(mapper, VehicleDeliveryRecordRequestDto, VehicleDeliveryRecord);
      createMap(
        mapper,
        VehicleDeliveryRecord,
        VehicleDeliveryRecordResponseDto,
      );
    };
  }
}
