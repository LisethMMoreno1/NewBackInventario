import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { VehicleOwnerRequestDto } from 'src/modules/administration/domain/vehicleOwner/DTO/vehicleOwner-request.dto';
import { VehicleOwnerResponseDto } from 'src/modules/administration/domain/vehicleOwner/DTO/vehicleOwner-response.dto';
import { VehicleOwner } from 'src/modules/administration/domain/vehicleOwner/vehicleOwner.entity';

@Injectable()
export class VehicleOwnerProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, VehicleOwnerRequestDto, VehicleOwner);
      createMap(mapper, VehicleOwner, VehicleOwnerResponseDto);
    };
  }
}
