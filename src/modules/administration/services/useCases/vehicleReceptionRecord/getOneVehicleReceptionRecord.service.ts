import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleReceptionRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleReceptionRecord.repository';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { VehicleReceptionRecordResponseDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-response.dto';

@Injectable()
export class GetOneVehicleReceptionRecordService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleReceptionRecordRepository: VehicleReceptionRecordRepository,
  ) {}

  async handle(id: number): Promise<VehicleReceptionRecordResponseDto> {
    console.log('Fetching record with ID:', id);
    const record = await this._vehicleReceptionRecordRepository.getOne({
      where: { id },
    });
    console.log('Record found:', record);

    if (!record) {
      throw new NotFoundException(
        `VehicleReceptionRecord with ID ${id} not found.`,
      );
    }

    return this._mapper.map(
      record,
      VehicleReceptionRecord,
      VehicleReceptionRecordResponseDto,
    );
  }
}
