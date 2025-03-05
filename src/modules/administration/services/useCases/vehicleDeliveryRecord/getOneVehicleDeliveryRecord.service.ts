import { Injectable } from '@nestjs/common';
import { VehicleDeliveryRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleDeliveryRecord.repository';
import { VehicleDeliveryRecordResponseDto } from 'src/modules/administration/domain/vehicleDeliveryRecord/DTO/vehicleDeliveryRecord-response.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleDeliveryRecord } from 'src/modules/administration/domain/vehicleDeliveryRecord/vehicleDeliveryRecord.entity';

@Injectable()
export class GetOneVehicleDeliveryRecordService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleDeliveryRecordRepository: VehicleDeliveryRecordRepository,
  ) {}

  async handle(id: number): Promise<VehicleDeliveryRecordResponseDto> {
    const record = await this._vehicleDeliveryRecordRepository.getOne({
      where: { id },
    });
    return this._mapper.map(
      record,
      VehicleDeliveryRecord,
      VehicleDeliveryRecordResponseDto,
    );
  }
}
