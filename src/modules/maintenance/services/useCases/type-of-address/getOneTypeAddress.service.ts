import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfAddressResponseDto } from 'src/modules/maintenance/domain/type-of-address/DTO/typeAddress-response.dto';
import { TypeOfAddress } from 'src/modules/maintenance/domain/type-of-address/typeAddress.entity';
import { TypeOfAddressRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeAddress.repository';

/**
 * Service class for retrieving a single TypeOfAddress.
 */
@Injectable()
export class GetOneTypeOfAddressService {
  /**
   * Constructor for GetOneTypeOfAddressService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfAddressRepository - The repository for managing TypeOfAddress entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfAddressRepository: TypeOfAddressRepository,
  ) {}

  /**
   * Gets a TypeOfAddress by its ID.
   * @param id_typeOfAddress - The ID of the TypeOfAddress to retrieve.
   * @returns A TypeOfAddressResponseDto.
   * @throws NotFoundException if the TypeOfAddress is not found.
   */
  async getOne(id_typeOfAddress: number): Promise<TypeOfAddressResponseDto> {
    const typeOfAddress = await this._typeOfAddressRepository.getOne({
      where: { id_typeOfAddress },
    });

    if (!typeOfAddress) {
      throw new NotFoundException('El tipo de dirección no fue encontrado.');
    }

    return this._mapper.map(
      typeOfAddress,
      TypeOfAddress,
      TypeOfAddressResponseDto,
    );
  }
}
