import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';
import { TypeOfIdentificationRequestDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-request.dto';
import { TypeOfIdentificationResponseDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-response.dto';
import { TypeOfIdentificationRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeIdentification.repository';

/**
 * Service class for updating a Type of Identification entity.
 */
@Injectable()
export class UpdateTypeIdentificationService {
  /**
   * Initializes a new instance of the UpdateTypeIdentificationService class.
   * @param _mapper - The mapper used for object transformations.
   * @param _typeOfIdentificationRepository - The repository for managing TypeOfIdentification entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfIdentificationRepository: TypeOfIdentificationRepository,
  ) {}

  /**
   * Updates an existing TypeOfIdentification entity.
   * @param id_typeIdentification - The ID of the TypeOfIdentification to update.
   * @param typeIdentificationRequest - The data for updating the TypeOfIdentification.
   * @returns A promise that resolves to the updated TypeOfIdentificationResponseDto.
   */
  async update(
    id_typeIdentification: number,
    typeIdentificationRequest: TypeOfIdentificationRequestDto,
  ): Promise<TypeOfIdentificationResponseDto> {
    const existingTypeIdentification =
      await this._typeOfIdentificationRepository.getOne({
        where: { id_typeIdentification },
      });

    if (!existingTypeIdentification) {
      throw new NotFoundException(
        'El tipo de identificación no fue encontrado.',
      );
    }

    const updatedTypeOfIdentificationData = this._mapper.map(
      typeIdentificationRequest,
      TypeOfIdentificationRequestDto,
      TypeOfIdentification,
    );

    const updatedTypeOfIdentification =
      await this._typeOfIdentificationRepository.update(
        id_typeIdentification,
        updatedTypeOfIdentificationData,
      );

    return this._mapper.map(
      updatedTypeOfIdentification,
      TypeOfIdentification,
      TypeOfIdentificationResponseDto,
    );
  }
}
