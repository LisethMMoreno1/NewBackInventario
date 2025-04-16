import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleExitRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleExitRecord.repository';
import { VehicleExitRecordRequestDto } from 'src/modules/administration/domain/vehicleExitRecord/DTO/vehicleExitRecord-request.dto';
import { VehicleExitRecord } from 'src/modules/administration/domain/vehicleExitRecord/vehicleExitRecord.entity';


@Injectable()
export class UpdateVehicleExitRecordService {
    constructor(
        @InjectMapper() private readonly _mapper: Mapper,
        private readonly _vehicleExitRecordRepository: VehicleExitRecordRepository,
    ) { }

    async handle(id: number, dto: VehicleExitRecordRequestDto): Promise<VehicleExitRecord> {
        let record = await this._vehicleExitRecordRepository.getOne({ where: { id } });
        if (!record) {
            throw new NotFoundException(`Vehicle Exit Record with ID ${id} not found.`);
        }

        record = this._mapper.map(dto, VehicleExitRecordRequestDto, VehicleExitRecord);
        record.id = id;

        return await this._vehicleExitRecordRepository.save(record);
    }
}
