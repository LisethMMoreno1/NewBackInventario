import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CityRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/city.repository';

@Injectable()
export class DeleteCityService {
  /**
   * Creates an instance of the GetAllCityService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _cityRepository - The repository for managing city entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _cityRepository: CityRepository,
  ) {}

  /**
   * Delete a city by its ID.
   * @param id_city - The city ID.
   */
  async handle(id_city: number): Promise<void> {
    await this._cityRepository.delete({ where: { id_city } });
  }
}
