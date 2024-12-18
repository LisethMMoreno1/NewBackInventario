import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfAddressRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeAddress.repository';

/**
 * Service class for deleting a TypeOfAddress.
 */
@Injectable()
export class DeleteTypeOfAddressService {
  /**
   * Constructor for DeleteTypeOfAddressService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfAddressRepository - The repository for managing TypeOfAddressRepository entities.
   */

  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfAddressRepository: TypeOfAddressRepository,
  ) {}

  /**
   * Deletes a Address type by its ID.
   * @param id_typeOfAddress - The ID of the Address type to delete.
   * @throws NotFoundException if the Address type is not found.
   */
  async delete(id_typeOfAddress: number): Promise<void> {
    const existingTypeOfAddress = await this._typeOfAddressRepository.getOne({
      where: { id_typeOfAddress },
    });

    if (!existingTypeOfAddress) {
      throw new NotFoundException('El tipo de direccion no fue encontrado.');
    }

    await this._typeOfAddressRepository.delete(id_typeOfAddress);
  }
}
