import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfIdentificationResponseDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-response.dto';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';
import { TypeOfIdentificationRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeIdentification.repository';

/**
 * Service class for deleting a TypeIdentification.
 */
@Injectable()
export class GetOneTypeIdentificationService {
  /**
   * Constructor for GetOneTypeIdentificationService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfIdentificationRepository - The repository for managing TypeIdentification entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfIdentificationRepository: TypeOfIdentificationRepository,
  ) {}

  /**
   * Deletes a TypeIdentification by its ID.
   * @param id_typeIdentification - The ID of the TypeIdentification to delete.
   * @throws NotFoundException if the TypeIdentification is not found.
   */
  async getOne(
    id_typeIdentification: number,
  ): Promise<TypeOfIdentificationResponseDto> {
    const typeOfIdentification =
      await this._typeOfIdentificationRepository.getOne({
        where: { id_typeIdentification },
      });

    if (!typeOfIdentification) {
      throw new NotFoundException(
        'El tipo de idenfiticacion no fue encontrado.',
      );
    }

    return this._mapper.map(
      typeOfIdentification,
      TypeOfIdentification,
      TypeOfIdentificationResponseDto,
    );
  }
}
