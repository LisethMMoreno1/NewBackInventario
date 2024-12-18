import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfIdentificationRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeIdentification.repository';

/**
 * Service class for deleting a TypeIdentification.
 */
@Injectable()
export class DeleteTypeIdentificationService {
  /**
   * Constructor for DeleteTypeIdentificationService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfIdentificationRepository - The repository for managing TypeIdentification entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfIdentificationRepository: TypeOfIdentificationRepository,
  ) {}

  /**
   * Deletes a bank by its ID.
   * @param id_typeIdentification - The ID of the bank to delete.
   * @throws NotFoundException if the bank is not found.
   */
  async delete(id_typeIdentification: number): Promise<void> {
    const existingTypeIdentification =
      await this._typeOfIdentificationRepository.getOne({
        where: { id_typeIdentification },
      });

    if (!existingTypeIdentification) {
      throw new NotFoundException('El banco no fue encontrado.');
    }

    await this._typeOfIdentificationRepository.delete(id_typeIdentification);
  }
}
