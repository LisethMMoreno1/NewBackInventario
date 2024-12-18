import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TypeOfAddressResponseDto } from 'src/modules/maintenance/domain/type-of-address/DTO/typeAddress-response.dto';
import { TypeOfAddress } from 'src/modules/maintenance/domain/type-of-address/typeAddress.entity';
import { TypeOfAddressRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeAddress.repository';

/**
 * Service class for retrieving all types of addresses.
 */
@Injectable()
export class GetAllTypeOfAddressService {
  /**
   * Constructor for GetAllTypeOfAddressService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfAddressRepository - The repository for managing TypeOfAddress entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfAddressRepository: TypeOfAddressRepository,
  ) {}

  /**
   * Retrieves all types of addresses.
   * @returns An array of TypeOfAddressResponseDto.
   */
  async getAll(): Promise<TypeOfAddressResponseDto[]> {
    const typeOfAddresses = await this._typeOfAddressRepository.getAll();

    return typeOfAddresses.map((typeOfAddress) =>
      this._mapper.map(typeOfAddress, TypeOfAddress, TypeOfAddressResponseDto),
    );
  }
}
