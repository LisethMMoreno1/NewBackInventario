import { HttpException, Injectable, Scope } from '@nestjs/common';
import { AdministrationContext } from '../context/administrationContext.service';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { VehicleDeliveryRecord } from 'src/modules/administration/domain/vehicleDeliveryRecord/vehicleDeliveryRecord.entity';

/**
 * Represents a Vehicle Delivery Record repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class VehicleDeliveryRecordRepository {
  /**
   * Creates a new instance of VehicleDeliveryRecordRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all vehicle delivery records from the database.
   * @param options - Optional criteria to filter the records.
   * @returns A promise that resolves to an array of VehicleDeliveryRecord.
   * @throws HttpException if there's an error retrieving the records from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<VehicleDeliveryRecord>,
  ): Promise<VehicleDeliveryRecord[]> {
    try {
      return await this._context.vehicleDeliveryRecord.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Database error: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new vehicle delivery record in the database.
   * @param record - The vehicle delivery record object to create.
   * @returns A promise that resolves to the created VehicleDeliveryRecord.
   * @throws HttpException if there's an error creating the record in the database.
   */
  async create(record: VehicleDeliveryRecord): Promise<VehicleDeliveryRecord> {
    try {
      const recordData =
        await this._context.vehicleDeliveryRecord.create(record);
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
   * Retrieves a vehicle delivery record by the provided criteria.
   * @param options - The criteria to find the record.
   * @returns A promise that resolves to the found VehicleDeliveryRecord.
   * @throws HttpException if there's an error finding the record in the database.
   */
  async getOne(
    options: GetOneCriteriaType<VehicleDeliveryRecord>,
  ): Promise<VehicleDeliveryRecord> {
    try {
      return await this._context.vehicleDeliveryRecord.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Database error: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a vehicle delivery record in the database.
   * @param criteria - The criteria to find the record to update.
   * @param record - The updated vehicle delivery record object.
   * @returns A promise that resolves to the updated VehicleDeliveryRecord.
   * @throws HttpException if there's an error updating the record in the database.
   */
  async update(
    criteria: UpdateCriteriaType<VehicleDeliveryRecord>,
    record: VehicleDeliveryRecord,
  ): Promise<VehicleDeliveryRecord> {
    try {
      const updateResult = await this._context.vehicleDeliveryRecord.update(
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
   * Deletes a vehicle delivery record from the database.
   * @param criteria - The criteria to find the record to delete.
   * @returns A promise that resolves to the deleted VehicleDeliveryRecord.
   * @throws HttpException if there's an error deleting the record from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<VehicleDeliveryRecord>,
  ): Promise<VehicleDeliveryRecord> {
    try {
      const deleteResult =
        await this._context.vehicleDeliveryRecord.delete(criteria);
      return { ...deleteResult?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Database error: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a vehicle delivery record in the database.
   * @param record - The vehicle delivery record object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved VehicleDeliveryRecord.
   * @throws HttpException if there's an error saving the record in the database.
   */
  async save(
    record: VehicleDeliveryRecord,
    options?: SaveOptionsType<VehicleDeliveryRecord>,
  ): Promise<VehicleDeliveryRecord> {
    try {
      const recordSaved = await this._context.vehicleDeliveryRecord.save(
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
   * Retrieves a vehicle delivery record by its id.
   * @param id - The id of the record.
   * @returns A promise that resolves to the found VehicleDeliveryRecord or null.
   */
  async getById(id: number): Promise<VehicleDeliveryRecord | null> {
    return this.getOne({ where: { id } });
  }
}
