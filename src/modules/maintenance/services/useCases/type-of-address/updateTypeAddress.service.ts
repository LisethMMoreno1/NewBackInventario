import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfAddress } from 'src/modules/maintenance/domain/type-of-address/typeAddress.entity';
import { TypeOfAddressRequestDto } from 'src/modules/maintenance/domain/type-of-address/DTO/typeAddress-request.dto';
import { TypeOfAddressResponseDto } from 'src/modules/maintenance/domain/type-of-address/DTO/typeAddress-response.dto';
import { TypeOfAddressRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeAddress.repository';

/**
 * Service class for updating a TypeOfAddress entity.
 */
@Injectable()
export class UpdateTypeOfAddressService {
  /**
   * Initializes a new instance of the UpdateTypeOfAddressService class.
   * @param _mapper - The mapper used for object transformations.
   * @param _typeOfAddressRepository - The repository for managing TypeOfAddress entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfAddressRepository: TypeOfAddressRepository,
  ) {}

  /**
   * Updates an existing TypeOfAddress entity.
   * @param id_typeOfAddress - The ID of the TypeOfAddress to update.
   * @param typeOfAddressRequest - The data for updating the TypeOfAddress.
   * @returns A promise that resolves to the updated TypeOfAddressResponseDto.
   */
  async update(
    id_typeOfAddress: number,
    typeOfAddressRequest: TypeOfAddressRequestDto,
  ): Promise<TypeOfAddressResponseDto> {
    const existingTypeOfAddress = await this._typeOfAddressRepository.getOne({
      where: { id_typeOfAddress },
    });

    if (!existingTypeOfAddress) {
      throw new NotFoundException('El tipo de dirección no fue encontrado.');
    }

    const updatedTypeOfAddressData = this._mapper.map(
      typeOfAddressRequest,
      TypeOfAddressRequestDto,
      TypeOfAddress,
    );

    const updatedTypeOfAddress = await this._typeOfAddressRepository.update(
      id_typeOfAddress,
      updatedTypeOfAddressData,
    );

    return this._mapper.map(
      updatedTypeOfAddress,
      TypeOfAddress,
      TypeOfAddressResponseDto,
    );
  }
}
