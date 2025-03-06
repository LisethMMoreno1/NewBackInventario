import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { VehicleDeliveryRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleDeliveryRecord.repository';

@Injectable()
export class GetOneVehicleDeliveryRecordService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleDeliveryRecordRepository: VehicleDeliveryRecordRepository,
  ) {}

  async handle(id: number): Promise<any> {
    // 👈 Prueba con any temporalmente
    const record = await this._vehicleDeliveryRecordRepository.getOne({
      where: { id },
    });

    console.log('🔍 Registro encontrado:', record); // 👈 Verifica qué datos trae

    return record;
  }
}
