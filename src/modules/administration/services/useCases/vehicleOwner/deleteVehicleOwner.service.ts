import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleOwnerRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleOwner.repository';

@Injectable()
export class DeleteVehicleOwnerService {
  constructor(
    private readonly _vehicleOwnerRepository: VehicleOwnerRepository,
  ) {}

  async handle(id: number): Promise<void> {
    const owner = await this._vehicleOwnerRepository.getOne({ where: { id } });
    if (!owner) {
      throw new NotFoundException(`Vehicle owner with ID ${id} not found`);
    }
    await this._vehicleOwnerRepository.delete(owner);
  }
}
