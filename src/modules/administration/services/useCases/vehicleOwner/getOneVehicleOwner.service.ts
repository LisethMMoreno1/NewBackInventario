import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleOwnerResponseDto } from 'src/modules/administration/domain/vehicleOwner/DTO/vehicleOwner-response.dto';
import { VehicleOwnerRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleOwner.repository';
import { VehicleOwner } from 'src/modules/administration/domain/vehicleOwner/vehicleOwner.entity';

@Injectable()
export class GetOneVehicleOwnerService {
  constructor(
    private readonly _vehicleOwnerRepository: VehicleOwnerRepository,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  async handle(id: number): Promise<VehicleOwnerResponseDto> {
    const owner = await this._vehicleOwnerRepository.getOne({ where: { id } });
    if (!owner) {
      throw new NotFoundException(`Vehicle owner with ID ${id} not found`);
    }
    return this._mapper.map(owner, VehicleOwner, VehicleOwnerResponseDto);
  }
}
