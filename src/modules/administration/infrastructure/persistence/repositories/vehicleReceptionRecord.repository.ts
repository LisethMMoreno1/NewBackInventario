import { HttpException, Injectable, Scope } from '@nestjs/common';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';

/**
 * Represents a Vehicle Reception Record repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class VehicleReceptionRecordRepository {
  /**
   * Creates a new instance of VehicleReceptionRecordRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all vehicle reception records from the database.
   * @param options - Optional criteria to filter the records.
   * @returns A promise that resolves to an array of VehicleReceptionRecord.
   * @throws HttpException if there's an error retrieving the records from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<VehicleReceptionRecord>,
  ): Promise<VehicleReceptionRecord[]> {
    try {
      return await this._context.vehicleReceptionRecord.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  async create(
    record: VehicleReceptionRecord,
  ): Promise<VehicleReceptionRecord> {
    try {
      const recordData =
        await this._context.vehicleReceptionRecord.create(record);
      return {
        ...record,
        ...recordData?.raw[0],
        ...recordData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Database error: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Retrieves a vehicle reception record by the provided criteria.
   * @param options - The criteria to find the record.
   * @returns A promise that resolves to the found VehicleReceptionRecord.
   * @throws HttpException if there's an error finding the record in the database.
   */
  async getOne(options: any): Promise<VehicleReceptionRecord | null> {
    try {
      if (!options || !options.where) {
        throw new Error('Debes proporcionar condiciones de búsqueda válidas.');
      }

      return await this._context.vehicleReceptionRecord.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a vehicle reception record in the database.
   * @param criteria - The criteria to find the record to update.
   * @param record - The updated vehicle reception record object.
   * @returns A promise that resolves to the updated VehicleReceptionRecord.
   * @throws HttpException if there's an error updating the record in the database.
   */
  async update(
    criteria: UpdateCriteriaType<VehicleReceptionRecord>,
    record: VehicleReceptionRecord,
  ): Promise<VehicleReceptionRecord> {
    try {
      const updateResult = await this._context.vehicleReceptionRecord.update(
        criteria,
        record,
      );
      return {
        ...record,
        ...(updateResult?.raw[0] ?? {}),
        ...(updateResult?.generatedMaps[0] ?? {}),
      };
    } catch (error) {
      throw new HttpException(
        `Database error: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a vehicle reception record from the database.
   * @param criteria - The criteria to find the record to delete.
   * @returns A promise that resolves to the deleted VehicleReceptionRecord.
   * @throws HttpException if there's an error deleting the record from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<VehicleReceptionRecord>,
  ): Promise<VehicleReceptionRecord> {
    try {
      const deleteResult =
        await this._context.vehicleReceptionRecord.delete(criteria);
      return { ...deleteResult?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Database error: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a vehicle reception record in the database.
   * @param record - The vehicle reception record object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved VehicleReceptionRecord.
   * @throws HttpException if there's an error saving the record in the database.
   */
  async save(
    record: VehicleReceptionRecord,
    options?: SaveOptionsType<VehicleReceptionRecord>,
  ): Promise<VehicleReceptionRecord> {
    try {
      const recordSaved = await this._context.vehicleReceptionRecord.save(
        record,
        options,
      );
      return recordSaved;
    } catch (error) {
      throw new HttpException(
        `Database error: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Retrieves a vehicle reception record by its identification number.
   * @param identificationNumber - The identification number of the record.
   * @returns A promise that resolves to the found VehicleReceptionRecord or null.
   */
  async getByIdentificationNumber(
    identificationNumber: number,
  ): Promise<VehicleReceptionRecord | null> {
    return this.getOne({ where: { id: identificationNumber } });
  }
}
