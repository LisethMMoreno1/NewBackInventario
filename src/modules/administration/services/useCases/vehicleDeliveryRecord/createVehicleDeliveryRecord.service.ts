import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleDeliveryRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleDeliveryRecord.repository';
import { VehicleDeliveryRecordResponseDto } from 'src/modules/administration/domain/vehicleDeliveryRecord/DTO/vehicleDeliveryRecord-response.dto';
import { VehicleDeliveryRecord } from 'src/modules/administration/domain/vehicleDeliveryRecord/vehicleDeliveryRecord.entity';
import { VehicleDeliveryRecordRequestDto } from 'src/modules/administration/domain/vehicleDeliveryRecord/DTO/vehicleDeliveryRecord-resquest.dto';

@Injectable()
export class CreateVehicleDeliveryRecordService {
  constructor(
    @InjectMapper() private readonly mapper: Mapper,
    private readonly vehicleDeliveryRecordRepository: VehicleDeliveryRecordRepository,
  ) {}

  async handle(
    dto: VehicleDeliveryRecordRequestDto,
  ): Promise<VehicleDeliveryRecordResponseDto> {
    try {
      if (!dto.deliveryDate || !dto.completedRepairs) {
        throw new Error(
          'Missing required fields: deliveryDate or completedRepairs',
        );
      }

      const entity = this.mapper.map(
        dto,
        VehicleDeliveryRecordRequestDto,
        VehicleDeliveryRecord,
      );
      const savedEntity =
        await this.vehicleDeliveryRecordRepository.save(entity);
      return this.mapper.map(
        savedEntity,
        VehicleDeliveryRecord,
        VehicleDeliveryRecordResponseDto,
      );
    } catch (error) {
      console.error(
        'Error in CreateVehicleDeliveryRecordService.handle:',
        error.message,
      );
      throw error;
    }
  }
}
