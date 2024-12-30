import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TypeOfGenderResponseDto } from 'src/modules/maintenance/domain/type-of-gender/DTO/typeGender-response.dto';
import { TypeOfGender } from 'src/modules/maintenance/domain/type-of-gender/typegender.entity';
import { TypeOfGenderRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typGender.repository';

/**
 * Service class for getting all gender types.
 */
@Injectable()
export class GetAllTypeGenderService {
  /**
   * Constructor for GetAllTypeGenderService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfGenderRepository - The repository for managing gender type entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfGenderRepository: TypeOfGenderRepository,
  ) {}

  async getAll(): Promise<TypeOfGenderResponseDto[]> {
    const typeOfGender = await this._typeOfGenderRepository.getAll();

    // Asegúrate de crear el mapeo directamente aquí
    return typeOfGender.map((typeOfGender) =>
      this._mapper.map(typeOfGender, TypeOfGender, TypeOfGenderResponseDto),
    );
  }
}
