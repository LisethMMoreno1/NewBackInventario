import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfGender } from 'src/modules/maintenance/domain/type-of-gender/typegender.entity';
import { TypeOfGenderRequestDto } from 'src/modules/maintenance/domain/type-of-gender/DTO/typeGender-request.dto';
import { TypeOfGenderResponseDto } from 'src/modules/maintenance/domain/type-of-gender/DTO/typeGender-response.dto';
import { TypeOfGenderRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typGender.repository';

/**
 * Service class for updating a TypeOfGender entity.
 */
@Injectable()
export class UpdateTypeOfGenderService {
  /**
   * Initializes a new instance of the UpdateTypeOfGenderService class.
   * @param _mapper - The mapper used for object transformations.
   * @param _typeOfGenderRepository - The repository for managing TypeOfGender entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfGenderRepository: TypeOfGenderRepository,
  ) {}

  /**
   * Updates an existing TypeOfGender entity.
   * @param id_typeOfGender - The ID of the TypeOfGender to update.
   * @param typeOfGenderRequest - The data for updating the TypeOfGender.
   * @returns A promise that resolves to the updated TypeOfGenderResponseDto.
   */
  async update(
    id_typeOfGender: number,
    typeOfGenderRequest: TypeOfGenderRequestDto,
  ): Promise<TypeOfGenderResponseDto> {
    const existingTypeOfGender = await this._typeOfGenderRepository.getOne({
      where: { id_typeOfGender },
    });

    if (!existingTypeOfGender) {
      throw new NotFoundException('El tipo de género no fue encontrado.');
    }

    const updatedTypeOfGenderData = this._mapper.map(
      typeOfGenderRequest,
      TypeOfGenderRequestDto,
      TypeOfGender,
    );

    const updatedTypeOfGender = await this._typeOfGenderRepository.update(
      id_typeOfGender,
      updatedTypeOfGenderData,
    );

    return this._mapper.map(
      updatedTypeOfGender,
      TypeOfGender,
      TypeOfGenderResponseDto,
    );
  }
}
