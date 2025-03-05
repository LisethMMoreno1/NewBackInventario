import { Injectable } from '@nestjs/common';
import { VehicleDeliveryRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleDeliveryRecord.repository';
import { VehicleDeliveryRecordResponseDto } from 'src/modules/administration/domain/vehicleDeliveryRecord/DTO/vehicleDeliveryRecord-response.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleDeliveryRecord } from 'src/modules/administration/domain/vehicleDeliveryRecord/vehicleDeliveryRecord.entity';

@Injectable()
export class DeleteVehicleDeliveryRecordService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleDeliveryRecordRepository: VehicleDeliveryRecordRepository,
  ) {}

  async handle(id: number): Promise<VehicleDeliveryRecordResponseDto> {
    // Delete record by id.
    const deletedEntity = await this._vehicleDeliveryRecordRepository.delete({
      id,
    });
    // Map deleted entity to response DTO.
    return this._mapper.map(
      deletedEntity,
      VehicleDeliveryRecord,
      VehicleDeliveryRecordResponseDto,
    );
  }
}
