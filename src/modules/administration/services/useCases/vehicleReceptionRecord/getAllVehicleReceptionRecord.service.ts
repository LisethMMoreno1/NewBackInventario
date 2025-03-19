import { Injectable } from '@nestjs/common';
import { VehicleReceptionRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleReceptionRecord.repository';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { VehicleReceptionRecordResponseDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-response.dto';

@Injectable()
export class GetAllVehicleReceptionRecordService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleReceptionRecordRepository: VehicleReceptionRecordRepository,
  ) {}

  async handle(): Promise<VehicleReceptionRecordResponseDto[]> {
    console.log('Fetching all records...'); // Depuración

    const records = await this._vehicleReceptionRecordRepository.getAll({
      relations: ['vehicleOwner'], // Agregado aquí directamente
    });

    console.log('Records found:', JSON.stringify(records, null, 2)); // Depuración detallada

    if (!records || records.length === 0) {
      console.log('No records found.'); // Depuración
      return [];
    }

    // Mapear cada registro a DTO
    const mappedRecords = records.map((record) =>
      this._mapper.map(
        record,
        VehicleReceptionRecord,
        VehicleReceptionRecordResponseDto,
      ),
    );

    console.log('Mapped records:', JSON.stringify(mappedRecords, null, 2)); // Depuración

    return mappedRecords;
  }
}
