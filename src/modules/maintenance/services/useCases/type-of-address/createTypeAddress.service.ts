import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { ConflictException, Injectable } from '@nestjs/common';
import { TypeOfAddressRequestDto } from 'src/modules/maintenance/domain/type-of-address/DTO/typeAddress-request.dto';
import { TypeOfAddressResponseDto } from 'src/modules/maintenance/domain/type-of-address/DTO/typeAddress-response.dto';
import { TypeOfAddress } from 'src/modules/maintenance/domain/type-of-address/typeAddress.entity';
import { TypeOfAddressRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeAddress.repository';

@Injectable()
export class CreateTypeOfAddressService {
  /**
   * Constructor for CreateTypeOfAddressService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfAddressRepository - The repository for managing TypeOfAddressRepository entities.
   */

  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfAddressRepository: TypeOfAddressRepository,
  ) {}

  async handle(
    typeOfAddressRequest: TypeOfAddressRequestDto,
  ): Promise<TypeOfAddressResponseDto> {
    const typeOfAddressMap = this._mapper.map(
      typeOfAddressRequest,
      TypeOfAddressRequestDto,
      TypeOfAddress,
    );

    const existingTypeOfAddress = await this._typeOfAddressRepository.getOne({
      where: {
        id_typeOfAddress: typeOfAddressMap?.id_typeOfAddress,
      },
    });

    if (existingTypeOfAddress?.name_typeOfAddress)
      throw new ConflictException('Ya existe una dirección con ese nombre');

    const createdTypeOfAddress =
      await this._typeOfAddressRepository.create(typeOfAddressMap);

    return this._mapper.map(
      createdTypeOfAddress,
      TypeOfAddress,
      TypeOfAddressResponseDto,
    );
  }
}
