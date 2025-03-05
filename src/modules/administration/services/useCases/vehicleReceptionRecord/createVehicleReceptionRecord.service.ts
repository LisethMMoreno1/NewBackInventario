import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { VehicleReceptionRecordRequestDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-request.dto';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { VehicleReceptionRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleReceptionRecord.repository';

@Injectable()
export class CreateVehicleReceptionRecordService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleReceptionRecord: VehicleReceptionRecordRepository,
  ) {}

  async handle(createDto: VehicleReceptionRecordRequestDto) {
    const receptionRecord = new VehicleReceptionRecord();
    receptionRecord.arrivalCondition = createDto.arrivalCondition; // Ensure this is provided
    // Assign other fields from createDto...

    console.log(receptionRecord); // Debugging: Log the entity before saving
    return await this._vehicleReceptionRecord.create(receptionRecord);
  }
}
