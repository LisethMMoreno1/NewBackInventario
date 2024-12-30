import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TypeOfIdentificationRequestDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-request.dto';
import { TypeOfIdentificationResponseDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-response.dto';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';
import { TypeOfIdentificationRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeIdentification.repository';

/**
 * Service class for creating a new type of identification.
 */
@Injectable()
export class CreateTypeIdentificationService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfIdentificationRepository: TypeOfIdentificationRepository,
  ) {}

  /**
   * Handle the creation of a new type of identification.
   * @param createDto - The type of identification to be created.
   * @returns The created type of identification.
   */
  async handle(
    createDto: TypeOfIdentificationRequestDto,
  ): Promise<TypeOfIdentificationResponseDto> {
    // Crear una nueva entidad
    const typeOfIdentification = new TypeOfIdentification();

    // Asignar los valores del DTO a la entidad
    typeOfIdentification.name_typeIdentification =
      createDto.name_typeIdentification;
    typeOfIdentification.code_typeIdentification =
      createDto.code_typeIdentification;

    // Verifica si 'name_typeIdentification' tiene un valor antes de insertarlo
    if (!typeOfIdentification.name_typeIdentification) {
      throw new Error('El nombre del tipo de identificación es obligatorio');
    }

    // Guardar la entidad en la base de datos
    const createdTypeOfIdentification =
      await this._typeOfIdentificationRepository.save(typeOfIdentification);

    // Mapear la respuesta a un DTO
    const responseDto = this._mapper.map(
      createdTypeOfIdentification,
      TypeOfIdentification,
      TypeOfIdentificationResponseDto,
    );

    return responseDto;
  }
}
