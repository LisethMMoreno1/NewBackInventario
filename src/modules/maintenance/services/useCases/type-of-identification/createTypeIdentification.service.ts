import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { ConflictException, Injectable } from '@nestjs/common';
import { TypeOfIdentificationRequestDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-request.dto';
import { TypeOfIdentificationResponseDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-response.dto';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';
import { TypeOfIdentificationRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeIdentification.repository';

/**
 * Service class for creating a new bank.
 */
@Injectable()
export class CreateTypeIdentificationService {
  /**
   * Creates an instance of the CreatebankService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfIdentificationRepository - The repository for managing bank entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfIdentificationRepository: TypeOfIdentificationRepository,
  ) {}

  /**
   * Handle the creation of a new bank
   * Creates a new bank.
   * @param typeOfIdentification - The bank to be created.
   * @returns The created bank.
   */
  async handle(
    typeOfIdentificationRequest: TypeOfIdentificationRequestDto,
  ): Promise<TypeOfIdentificationResponseDto> {
    const typeOfIdentificationMap = this._mapper.map(
      typeOfIdentificationRequest,
      TypeOfIdentificationRequestDto,
      TypeOfIdentification,
    );

    const existbank = await this._typeOfIdentificationRepository.getOne({
      where: [
        {
          id_typeIdentification: typeOfIdentificationMap?.id_typeIdentification,
        },
      ],
    });

    if (existbank?.name_typeIdentification)
      throw new ConflictException('Ya existe un banco con ese nombre');

    const typeOfIdentification =
      await this._typeOfIdentificationRepository.create(
        typeOfIdentificationMap,
      );

    const response = this._mapper.map(
      typeOfIdentification,
      TypeOfIdentification,
      TypeOfIdentificationResponseDto,
    );

    return response;
  }
}
