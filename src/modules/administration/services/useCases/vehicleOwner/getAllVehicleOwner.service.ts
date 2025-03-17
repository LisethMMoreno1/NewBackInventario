import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleOwnerRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleOwner.repository';
import { VehicleOwnerResponseDto } from 'src/modules/administration/domain/vehicleOwner/DTO/vehicleOwner-response.dto';
import { VehicleOwner } from 'src/modules/administration/domain/vehicleOwner/vehicleOwner.entity';

@Injectable()
export class GetAllVehicleOwnerService {
  constructor(
    private readonly _vehicleOwnerRepository: VehicleOwnerRepository,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  async handle(): Promise<VehicleOwnerResponseDto[]> {
    const owners = await this._vehicleOwnerRepository.getAll();
    return this._mapper.mapArray(owners, VehicleOwner, VehicleOwnerResponseDto);
  }
}
