import { HttpException, Injectable, Scope } from '@nestjs/common';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { City } from 'src/modules/maintenance/domain/cities/cities.entity';
import { MaintenanceContext } from '../context/maintenaceContext.service';

/**
 * Represents a City repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class CityRepository {
  /**
   * Creates a new instance of CityRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: MaintenanceContext) {}

  /**
   * Retrieves all Cities from the database.
   * @param options - Optional criteria to filter the Cities.
   * @returns A promise that resolves to an array of Cities.
   * @throws HttpException if there's an error retrieving the Cities from the database.
   */
  async getAll(options?: GetAllCriteriaType<City>): Promise<City[]> {
    try {
      return await this._context.city.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB al obtener ciudades: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new City in the database.
   * @param city - The City object to create.
   * @returns A promise that resolves to the created City.
   * @throws HttpException if there's an error creating the City in the database.
   */
  async create(city: City): Promise<City> {
    try {
      const cityData = await this._context.city.create(city);
      return {
        ...city,
        ...cityData?.raw[0],
        ...cityData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB al crear la ciudad: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a City by the provided criteria in the database.
   * @param options - The criteria to find the City.
   * @returns A promise that resolves to the found City.
   * @throws HttpException if there's an error finding the City in the database.
   */
  async getOne(options: GetOneCriteriaType<City>): Promise<City> {
    try {
      return await this._context.city.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB al obtener la ciudad: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a City in the database.
   * @param criteria - The criteria to find the City to update.
   * @param city - The updated City object.
   * @returns A promise that resolves to the updated City.
   * @throws HttpException if there's an error updating the City in the database.
   */
  async update(criteria: UpdateCriteriaType<City>, city: City): Promise<City> {
    try {
      const updateCity = await this._context.city.update(criteria, city);
      return {
        ...city,
        ...updateCity?.raw[0],
        ...updateCity?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB al actualizar la ciudad: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a City from the database.
   * @param criteria - The criteria to find the City to delete.
   * @returns A promise that resolves to the deleted City.
   * @throws HttpException if there's an error deleting the City from the database.
   */
  async delete(criteria: DeleteCriteriaType<City>): Promise<City> {
    try {
      const deleteCity = await this._context.city.delete(criteria);
      return { ...deleteCity?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB al eliminar la ciudad: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a City in the database.
   * @param city - The City object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved City.
   * @throws HttpException if there's an error saving the City in the database.
   */
  async save(city: City, options?: SaveOptionsType<City>): Promise<City> {
    try {
      return await this._context.city.save(city, options);
    } catch (error) {
      throw new HttpException(
        `Error de DB al guardar la ciudad: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a city by its city code.
   * @param code_city - The code of the city to search for.
   * @returns A city that matches the provided code, or undefined if not found.
   */
  async getOneCode(code_city: number): Promise<City | undefined> {
    try {
      return await this._context.city.getOne({
        where: { code_city }, // Buscar ciudad por su código
        relations: ['department'], // Incluir la relación si es necesario
      });
    } catch (error) {
      throw new Error(`Error finding city by code: ${error.message}`);
    }
  }
}
