import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleReceptionRecordRequestDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-request.dto';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { VehicleReceptionRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleReceptionRecord.repository';
import { VehicleOwnerRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleOwner.repository';

@Injectable()
export class CreateVehicleReceptionRecordService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleReceptionRecord: VehicleReceptionRecordRepository,
    private readonly _vehicleOwnerRepository: VehicleOwnerRepository,
  ) {}

  async handle(createDto: VehicleReceptionRecordRequestDto) {
    console.log('DTO recibido:', createDto);

    // Buscar al propietario del vehículo
    const vehicleOwner = await this._vehicleOwnerRepository.getOne({
      where: { id: createDto.vehicleOwnerId },
    });

    if (!vehicleOwner) {
      throw new NotFoundException(
        `No se encontró un propietario con ID ${createDto.vehicleOwnerId}`,
      );
    }

    // Crear la entidad manualmente
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
    receptionRecord.vehicleOwner = vehicleOwner; // ✅ Ahora es una instancia correcta

    console.log('Entidad manualmente creada:', receptionRecord);

    return await this._vehicleReceptionRecord.save(receptionRecord);
  }
}
