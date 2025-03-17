import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { VehicleOwnerRequestDto } from 'src/modules/administration/domain/vehicleOwner/DTO/vehicleOwner-request.dto';
import { VehicleOwnerResponseDto } from 'src/modules/administration/domain/vehicleOwner/DTO/vehicleOwner-response.dto';
import { VehicleOwner } from 'src/modules/administration/domain/vehicleOwner/vehicleOwner.entity';
import { VehicleOwnerRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleOwner.repository';

@Injectable()
export class CreateVehicleOwnerService {
  /**
   * Creates an instance of the CreateVehicleOwnerService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _vehicleOwnerRepository - The repository for managing VehicleOwner entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleOwnerRepository: VehicleOwnerRepository,
  ) {}

  async handle(
    vehicleOwnerDto: VehicleOwnerRequestDto,
  ): Promise<VehicleOwnerResponseDto> {
    const vehicleOwner = this._mapper.map(
      vehicleOwnerDto,
      VehicleOwnerRequestDto,
      VehicleOwner,
    );
    const newVehicleOwner =
      await this._vehicleOwnerRepository.save(vehicleOwner);
    return this._mapper.map(
      newVehicleOwner,
      VehicleOwner,
      VehicleOwnerResponseDto,
    );
  }
}
