import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleExitRecordResponseDto } from 'src/modules/administration/domain/vehicleExitRecord/DTO/vehicleExitRecord-response.dto';
import { VehicleExitRecord } from 'src/modules/administration/domain/vehicleExitRecord/vehicleExitRecord.entity';
import { VehicleExitRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleExitRecord.repository';


@Injectable()
export class GetOneVehicleExitRecordService {
    constructor(
        @InjectMapper() private readonly _mapper: Mapper,
        private readonly _vehicleExitRecordRepository: VehicleExitRecordRepository,
    ) { }

    async handle(id: number): Promise<VehicleExitRecordResponseDto> {
        const record = await this._vehicleExitRecordRepository.getOne({
            where: { id },
            relations: ['vehicleOwner', 'order'], 
        });

        if (!record) {
            throw new NotFoundException(`Vehicle Exit Record with ID ${id} not found.`);
        }

        return this._mapper.map(record, VehicleExitRecord, VehicleExitRecordResponseDto);
    }
}
