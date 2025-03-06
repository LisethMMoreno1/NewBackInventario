import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { VehicleDeliveryRecordResponseDto } from 'src/modules/administration/domain/vehicleDeliveryRecord/DTO/vehicleDeliveryRecord-response.dto';
import { VehicleDeliveryRecordRequestDto } from 'src/modules/administration/domain/vehicleDeliveryRecord/DTO/vehicleDeliveryRecord-resquest.dto';
import { VehicleDeliveryRecord } from 'src/modules/administration/domain/vehicleDeliveryRecord/vehicleDeliveryRecord.entity';

@Injectable()
export class VehicleDeliveryRecordProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, VehicleDeliveryRecordRequestDto, VehicleDeliveryRecord);
      createMap(
        mapper,
        VehicleDeliveryRecord,
        VehicleDeliveryRecordResponseDto,
      );
    };
  }
}
