import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { City } from 'src/modules/maintenance/domain/cities/cities.entity';
import { CityRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/city.repository';

@Injectable()
export class GetAllCityService {
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
   * Handles the retrieval of all city.
   * @returns A list of all city.
   */
  async handle(): Promise<City[]> {
    try {
      // Retrieve all city
      return await this._cityRepository.getAll();
    } catch (error) {
      console.error('Error al obtener todos los ciudad:', error);
      throw new Error('Error al obtener todos los ciudad');
    }
  }
}
