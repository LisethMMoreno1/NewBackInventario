import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { City } from 'src/modules/maintenance/domain/cities/cities.entity';
import { CityResponseDto } from 'src/modules/maintenance/domain/cities/DTO/cities-responce.dto';
import { CityRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/city.repository';

@Injectable()
export class GetOneCityService {
  /**
   * Creates an instance of the GetOneCityService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _cityRepository - The repository for managing city entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _cityRepository: CityRepository,
  ) {}

  /**
   * Get a city by its id_city.
   * @param id_city - The city id_city.
   * @returns The city if found.
   * @throws NotFoundException if the city is not found.
   */
  async handle(id_city: number): Promise<CityResponseDto> {
    const city = await this._cityRepository.getOne({ where: { id_city } });
    if (!city) {
      throw new NotFoundException(`City with id_city ${id_city} not found`);
    }
    return this._mapper.map(city, City, CityResponseDto);
  }
}
