import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfGenderRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typGender.repository';

/**
 * Service class for deleting a TypeOfGender.
 */
@Injectable()
export class DeleteTypeOfGenderService {
  /**
   * Constructor for DeleteTypeOfGenderService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfGenderRepository - The repository for managing TypeOfGender entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfGenderRepository: TypeOfGenderRepository,
  ) {}

  /**
   * Deletes a gender type by its ID.
   * @param id_typeOfGender - The ID of the gender type to delete.
   * @throws NotFoundException if the gender type is not found.
   */
  async delete(id_typeOfGender: number): Promise<void> {
    const existingTypeOfGender = await this._typeOfGenderRepository.getOne({
      where: { id_typeOfGender },
    });

    if (!existingTypeOfGender) {
      throw new NotFoundException('El tipo de género no fue encontrado.');
    }

    await this._typeOfGenderRepository.delete(id_typeOfGender);
  }
}
