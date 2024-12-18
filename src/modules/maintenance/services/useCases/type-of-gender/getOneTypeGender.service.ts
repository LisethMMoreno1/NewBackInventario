import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfGenderResponseDto } from 'src/modules/maintenance/domain/type-of-gender/DTO/typeGender-response.dto';
import { TypeOfGender } from 'src/modules/maintenance/domain/type-of-gender/typegender.entity';
import { TypeOfGenderRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typGender.repository';

/**
 * Service class for getting a single TypeOfGender.
 */
@Injectable()
export class GetOneTypeOfGenderService {
  /**
   * Constructor for GetOneTypeOfGenderService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfGenderRepository - The repository for managing TypeOfGender entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfGenderRepository: TypeOfGenderRepository,
  ) {}

  /**
   * Gets a TypeOfGender by its ID.
   * @param id_typeOfGender - The ID of the TypeOfGender to get.
   * @throws NotFoundException if the TypeOfGender is not found.
   */
  async getOne(id_typeOfGender: number): Promise<TypeOfGenderResponseDto> {
    const typeOfGender = await this._typeOfGenderRepository.getOne({
      where: { id_typeOfGender },
    });

    if (!typeOfGender) {
      throw new NotFoundException('El tipo de género no fue encontrado.');
    }

    return this._mapper.map(
      typeOfGender,
      TypeOfGender,
      TypeOfGenderResponseDto,
    );
  }
}
