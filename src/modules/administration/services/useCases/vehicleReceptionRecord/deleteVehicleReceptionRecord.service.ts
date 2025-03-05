import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleReceptionRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleReceptionRecord.repository';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { VehicleReceptionRecordResponseDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-response.dto';

@Injectable()
export class DeleteVehicleReceptionRecordService {
  constructor(
    private readonly _vehicleReceptionRecordRepository: VehicleReceptionRecordRepository,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async handle(id: number): Promise<VehicleReceptionRecordResponseDto> {
    // Buscar la entidad antes de eliminarla
    const entity = await this._vehicleReceptionRecordRepository.getOne({
      where: { id },
    });
    if (!entity) {
      throw new NotFoundException(
        `VehicleReceptionRecord with ID ${id} not found.`,
      );
    }

    // Eliminar la entidad
    await this._vehicleReceptionRecordRepository.delete({ where: { id } });

    // Mapear la entidad eliminada a DTO
    return this.mapper.map(
      entity,
      VehicleReceptionRecord,
      VehicleReceptionRecordResponseDto,
    );
  }
}
