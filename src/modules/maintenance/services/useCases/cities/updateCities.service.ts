import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { City } from 'src/modules/maintenance/domain/cities/cities.entity';
import { CityRequestDto } from 'src/modules/maintenance/domain/cities/DTO/cities-request.dto';
import { CityResponseDto } from 'src/modules/maintenance/domain/cities/DTO/cities-responce.dto';
import { CityRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/city.repository';

@Injectable()
export class UpdateCityService {
  /**
   * Creates an instance of the UpdateCityService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _cityRepository - The repository for managing city entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _cityRepository: CityRepository,
  ) {}

  /**
   * Handles the update of a city by its ID.
   * @param id_city - The ID of the city to update.
   * @param cityRequest - The data to update the city with.
   * @returns The updated city as a CityResponseDto.
   * @throws NotFoundException if no city is found with the given ID.
   */
  async handle(
    id_city: number,
    cityRequest: CityRequestDto,
  ): Promise<CityResponseDto> {
    try {
      // Obtener la ciudad a actualizar
      const city = await this._cityRepository.getOne({
        where: { id_city },
      });

      // Verificar si la ciudad existe
      if (!city) {
        throw new NotFoundException(`City with ID ${id_city} not found`);
      }

      // Mapear los datos del DTO a la entidad City
      this._mapper.map(cityRequest, CityRequestDto, City);

      // Guardar los cambios en la base de datos
      const updatedCity = await this._cityRepository.save(city);

      // Mapear la ciudad actualizada a un DTO y devolverlo
      return this._mapper.map(updatedCity, City, CityResponseDto);
    } catch (error) {
      console.error('Error updating city:', error);
      throw new Error('Error updating city');
    }
  }
}
