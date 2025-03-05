import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleDeliveryRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleDeliveryRecord.repository';
import { VehicleDeliveryRecordResponseDto } from 'src/modules/administration/domain/vehicleDeliveryRecord/DTO/vehicleDeliveryRecord-response.dto';
import { VehicleDeliveryRecord } from 'src/modules/administration/domain/vehicleDeliveryRecord/vehicleDeliveryRecord.entity';
import { VehicleDeliveryRecordRequestDto } from 'src/modules/administration/domain/vehicleDeliveryRecord/DTO/vehicleDeliveryRecord-resquest.dto';

@Injectable()
export class UpdateVehicleDeliveryRecordService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleDeliveryRecordRepository: VehicleDeliveryRecordRepository,
  ) {}

  async handle(
    id: number,
    vehicleDeliveryRecorDto: VehicleDeliveryRecordRequestDto,
  ): Promise<VehicleDeliveryRecordResponseDto> {
    // Map request DTO to entity.
    const entity = this._mapper.map(
      vehicleDeliveryRecorDto,
      VehicleDeliveryRecordRequestDto,
      VehicleDeliveryRecord,
    );
    // Update record using criteria (here by id).
    const updatedEntity = await this._vehicleDeliveryRecordRepository.update(
      { id },
      entity,
    );
    // Map updated entity to response DTO.
    return this._mapper.map(
      updatedEntity,
      VehicleDeliveryRecord,
      VehicleDeliveryRecordResponseDto,
    );
  }
}
