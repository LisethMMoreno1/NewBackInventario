import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { ConflictException, Injectable } from '@nestjs/common';
import { TypeOfGenderRequestDto } from 'src/modules/maintenance/domain/type-of-gender/DTO/typeGender-request.dto';
import { TypeOfGenderResponseDto } from 'src/modules/maintenance/domain/type-of-gender/DTO/typeGender-response.dto';
import { TypeOfGender } from 'src/modules/maintenance/domain/type-of-gender/typeGender.entity';
import { TypeOfGenderRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typGender.repository';

@Injectable()
export class CreateTypeOfGenderService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfGenderRepository: TypeOfGenderRepository,
  ) {}

  async handle(
    typeOfGenderRequest: TypeOfGenderRequestDto,
  ): Promise<TypeOfGenderResponseDto> {
    const typeOfGenderEntity = this._mapper.map(
      typeOfGenderRequest,
      TypeOfGenderRequestDto,
      TypeOfGender,
    );

    const existingTypeOfGender = await this._typeOfGenderRepository.getOne({
      where: { name_typeOfGender: typeOfGenderEntity.name_typeOfGender },
    });

    if (existingTypeOfGender) {
      throw new ConflictException(
        `A TypeOfGender with the name '${typeOfGenderEntity.name_typeOfGender}' already exists.`,
      );
    }

    const createdTypeOfGender =
      await this._typeOfGenderRepository.create(typeOfGenderEntity);

    return this._mapper.map(
      createdTypeOfGender,
      TypeOfGender,
      TypeOfGenderResponseDto,
    );
  }
}
