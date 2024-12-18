import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TypeOfIdentificationResponseDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-response.dto';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';
import { TypeOfIdentificationRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeIdentification.repository';

/**
 * Service class for deleting a bank.
 */
@Injectable()
export class GetAllTypeIdentificationService {
  /**
   * Constructor for GetAllTypeIdentificationService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfIdentificationRepository - The repository for managing bank entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfIdentificationRepository: TypeOfIdentificationRepository,
  ) {}

  /**
   * Deletes a bank by its ID.
   * @param id_typeIdentification - The ID of the bank to delete.
   * @throws NotFoundException if the bank is not found.
   */
  async getAll(): Promise<TypeOfIdentificationResponseDto[]> {
    const typeOfIdentification =
      await this._typeOfIdentificationRepository.getAll();

    return typeOfIdentification.map((typeOfIdentification) =>
      this._mapper.map(
        typeOfIdentification,
        TypeOfIdentification,
        TypeOfIdentification,
      ),
    );
  }
}
