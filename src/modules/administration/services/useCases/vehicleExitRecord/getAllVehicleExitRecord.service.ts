import { Injectable } from '@nestjs/common';

import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleExitRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleExitRecord.repository';
import { VehicleExitRecordResponseDto } from 'src/modules/administration/domain/vehicleExitRecord/DTO/vehicleExitRecord-response.dto';
import { VehicleExitRecord } from 'src/modules/administration/domain/vehicleExitRecord/vehicleExitRecord.entity';

@Injectable()
export class GetAllVehicleExitRecordService {
    constructor(
        @InjectMapper() private readonly _mapper: Mapper,
        private readonly _vehicleExitRecordRepository: VehicleExitRecordRepository,
    ) { }

    async handle(): Promise<VehicleExitRecordResponseDto[]> {
        const records = await this._vehicleExitRecordRepository.getAll({
            relations: ['vehicleOwner', 'order'],
        });
        return this._mapper.mapArray(records, VehicleExitRecord, VehicleExitRecordResponseDto);
    }

}
