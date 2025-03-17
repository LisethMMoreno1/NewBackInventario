import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleOwnerRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleOwner.repository';
import { VehicleOwnerRequestDto } from 'src/modules/administration/domain/vehicleOwner/DTO/vehicleOwner-request.dto';
import { VehicleOwnerResponseDto } from 'src/modules/administration/domain/vehicleOwner/DTO/vehicleOwner-response.dto';
import { VehicleOwner } from 'src/modules/administration/domain/vehicleOwner/vehicleOwner.entity';

@Injectable()
export class UpdateVehicleOwnerService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _vehicleOwnerRepository: VehicleOwnerRepository,
  ) {}

  async handle(
    id: number,
    updateDto: VehicleOwnerRequestDto,
  ): Promise<VehicleOwnerResponseDto> {
    const owner = await this._vehicleOwnerRepository.getByIdentificationNumber(
      updateDto.identificationNumber,
    );

    if (!owner) {
      throw new NotFoundException(`Vehicle owner with ID ${id} not found`);
    }

    // Asignar manualmente solo si el campo existe en el DTO
    if (updateDto.fullName !== undefined) owner.fullName = updateDto.fullName;
    if (updateDto.identificationNumber !== undefined)
      owner.identificationNumber = updateDto.identificationNumber;
    if (updateDto.phoneNumber !== undefined)
      owner.phoneNumber = updateDto.phoneNumber;
    if (updateDto.email !== undefined) owner.email = updateDto.email;
    if (updateDto.address !== undefined) owner.address = updateDto.address;
    if (updateDto.vehicleBrand !== undefined)
      owner.vehicleBrand = updateDto.vehicleBrand;
    if (updateDto.vehicleModel !== undefined)
      owner.vehicleModel = updateDto.vehicleModel;
    if (updateDto.licensePlate !== undefined)
      owner.licensePlate = updateDto.licensePlate;
    if (updateDto.vehicleColor !== undefined)
      owner.vehicleColor = updateDto.vehicleColor;
    if (updateDto.insuranceValid !== undefined)
      owner.insuranceValid = updateDto.insuranceValid;
    if (updateDto.specialInstructions !== undefined)
      owner.specialInstructions = updateDto.specialInstructions;
    if (updateDto.authorizedForPickup !== undefined)
      owner.authorizedForPickup = updateDto.authorizedForPickup;

    const updatedOwner = await this._vehicleOwnerRepository.save(owner);

    return this._mapper.map(
      updatedOwner,
      VehicleOwner,
      VehicleOwnerResponseDto,
    );
  }
}
