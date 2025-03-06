import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { VehicleReceptionRecordRequestDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-request.dto';
import { VehicleReceptionRecordResponseDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-response.dto';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';

/**
 * Tool profile
 */
@Injectable()
export class VehicleReceptionRecordProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        VehicleReceptionRecord,
        VehicleReceptionRecordResponseDto,
      );
      createMap(
        mapper,
        VehicleReceptionRecordRequestDto,
        VehicleReceptionRecord,
      );
    };
  }
}
