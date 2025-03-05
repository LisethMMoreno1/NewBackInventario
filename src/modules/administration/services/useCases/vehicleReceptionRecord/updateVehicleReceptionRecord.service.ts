import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleReceptionRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleReceptionRecord.repository';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { VehicleReceptionRecordRequestDto } from 'src/modules/administration/domain/vehicleReceptionRecord/DTO/vehicleReceptionRecord-request.dto';
import { VehicleReceptionRecordResponseDto } from 'src/modules/administration/domain/vehicleReceptionRecord/DTO/vehicleReceptionRecord-response.dto';

@Injectable()
export class UpdateVehicleReceptionRecordService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleReceptionRecordRepository: VehicleReceptionRecordRepository,
  ) {}

  async handle(
    id: number,
    dto: VehicleReceptionRecordRequestDto,
  ): Promise<VehicleReceptionRecordResponseDto> {
    // Buscar la entidad existente
    const existingEntity = await this._vehicleReceptionRecordRepository.getOne({
      where: { id },
    });
    if (!existingEntity) {
      throw new NotFoundException(
        `VehicleReceptionRecord with ID ${id} not found.`,
      );
    }

    // Mapear el DTO a la entidad existente
    const entityToUpdate = this._mapper.map(
      dto,
      VehicleReceptionRecordRequestDto,
      VehicleReceptionRecord,
    );

    // Actualizar la entidad
    const updatedEntity = await this._vehicleReceptionRecordRepository.update(
      { id },
      entityToUpdate,
    );

    // Mapear la entidad actualizada a DTO
    return this._mapper.map(
      updatedEntity,
      VehicleReceptionRecord,
      VehicleReceptionRecordResponseDto,
    );
  }
}
