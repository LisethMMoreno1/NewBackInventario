import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { City } from 'src/modules/maintenance/domain/cities/cities.entity';
import { CityResponseDto } from 'src/modules/maintenance/domain/cities/DTO/cities-responce.dto';
import { CityRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/city.repository';

@Injectable()
export class GetCitiesByCodeService {
  /**
   * Creates an instance of the GetCitiesByCodeService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _cityRepository - The repository for managing city entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _cityRepository: CityRepository,
  ) {}

  /**
   * Retrieves cities by their city code.
   * @param code_city - The city code to search for.
   * @returns A list of cities that match the given city code.
   * @throws NotFoundException if no cities are found with the given city code.
   */
  async handle(code_city: number): Promise<CityResponseDto[]> {
    try {
      const city = await this._cityRepository.getOneCode(code_city);

      if (!city) {
        throw new NotFoundException(`No city found with code ${code_city}`);
      }

      // Mapear la entidad City a CityResponseDto
      return this._mapper.mapArray([city], City, CityResponseDto);
    } catch (error) {
      console.error('Error fetching city by code:', error);
      throw new Error('Error fetching city by code');
    }
  }
}
