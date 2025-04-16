import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleExitRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleExitRecord.repository';

@Injectable()
export class DeleteVehicleExitRecordService {
    constructor(private readonly _vehicleExitRecordRepository: VehicleExitRecordRepository) { }

    async handle(id: number): Promise<void> {
        const record = await this._vehicleExitRecordRepository.getOne({ where: { id } });
        if (!record) {
            throw new NotFoundException(`Vehicle Exit Record with ID ${id} not found.`);
        }
        await this._vehicleExitRecordRepository.delete(record);
    }
}
