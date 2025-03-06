import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { VehicleReceptionRecordRequestDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-request.dto';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { VehicleReceptionRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleReceptionRecord.repository';

@Injectable()
export class CreateVehicleReceptionRecordService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleReceptionRecord: VehicleReceptionRecordRepository,
  ) {}

  async handle(createDto: VehicleReceptionRecordRequestDto) {
    console.log('DTO recibido:', createDto);

    const receptionRecord = new VehicleReceptionRecord();
    receptionRecord.arrivalDate = new Date(createDto.arrivalDate);
    receptionRecord.arrivalCondition =
      createDto.arrivalCondition || 'Desconocido';
    receptionRecord.diagnosis = createDto.diagnosis;
    receptionRecord.diagnosisCost = createDto.diagnosisCost;
    receptionRecord.repairProposals = createDto.repairProposals;
    receptionRecord.invoiceDetails = createDto.invoiceDetails;
    receptionRecord.contractSigned = createDto.contractSigned;
    receptionRecord.advancePayment = createDto.advancePayment;

    console.log('Entidad manualmente creada:', receptionRecord);

    return await this._vehicleReceptionRecord.create(receptionRecord);
  }
}
