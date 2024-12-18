import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { ConflictException, Injectable } from '@nestjs/common';
import { City } from 'src/modules/maintenance/domain/cities/cities.entity';
import { CityRequestDto } from 'src/modules/maintenance/domain/cities/DTO/cities-request.dto';
import { CityResponseDto } from 'src/modules/maintenance/domain/cities/DTO/cities-responce.dto';

import { CityRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/city.repository';

/**
 * Service class for creating a new city.
 */
@Injectable()
export class CreateCityService {
  /**
   * Creates an instance of the CreateCityService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _cityRepository - The repository for managing city entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _cityRepository: CityRepository,
  ) {}

  /**
   * Handle the creation of a new city.
   * @param cityRequest - The city to be created.
   * @returns The created city.
   */
  async handle(cityRequest: CityRequestDto): Promise<CityResponseDto> {
    const cityMap = this._mapper.map(cityRequest, CityRequestDto, City);

    const existCity = await this._cityRepository.getOne({
      where: [
        {
          code_city: cityMap?.code_city,
        },
      ],
    });

    if (existCity?.code_city)
      throw new ConflictException('Ya existe una ciudad con ese código');

    const city = await this._cityRepository.create(cityMap);

    const response = this._mapper.map(city, City, CityResponseDto);

    return response;
  }
}
