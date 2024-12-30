import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TypeOfIdentificationResponseDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-response.dto';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';
import { TypeOfIdentificationRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeIdentification.repository';

@Injectable()
export class GetAllTypeIdentificationService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper, // Inyectamos el Mapper
    private readonly _typeOfIdentificationRepository: TypeOfIdentificationRepository,
  ) {}

  // Método para obtener todos los registros
  async getAll(): Promise<TypeOfIdentificationResponseDto[]> {
    const typeOfIdentifications =
      await this._typeOfIdentificationRepository.getAll();

    // Realizamos el mapeo de la entidad a DTO sin necesidad de un servicio adicional
    return typeOfIdentifications.map((typeOfIdentification) =>
      this._mapper.map(
        typeOfIdentification,
        TypeOfIdentification,
        TypeOfIdentificationResponseDto,
      ),
    );
  }
}
