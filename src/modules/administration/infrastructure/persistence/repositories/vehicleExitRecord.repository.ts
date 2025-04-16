import { HttpException, Injectable, Scope } from '@nestjs/common';

import { AdministrationContext } from '../context/administrationContext.service';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { VehicleExitRecord } from 'src/modules/administration/domain/VehicleExitRecord/VehicleExitRecord.entity';

/**
 * Represents a VehicleExitRecord repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class VehicleExitRecordRepository {
  /**
   * Creates a new instance of VehicleExitRecordRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) { }

  /**
   * Retrieves all VehicleExitRecords from the database.
   * @param options - Optional criteria to filter the VehicleExitRecords.
   * @returns A promise that resolves to an array of VehicleExitRecords.
   * @throws HttpException if there's an error retrieving the VehicleExitRecords from the database.
   */
  async getAll(options?: GetAllCriteriaType<VehicleExitRecord>): Promise<VehicleExitRecord[]> {
    try {
      return await this._context.vehicleExitRecord.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new VehicleExitRecord in the database.
   * @param VehicleExitRecord - The VehicleExitRecord object to create.
   * @returns A promise that resolves to the created VehicleExitRecord.
   * @throws HttpException if there's an error creating the VehicleExitRecord in the database.
   */
  async create(VehicleExitRecord: VehicleExitRecord): Promise<VehicleExitRecord> {
    try {
      const VehicleExitRecordData = await this._context.vehicleExitRecord.create(VehicleExitRecord);
      return {
        ...VehicleExitRecord,
        ...VehicleExitRecordData?.raw[0],
        ...VehicleExitRecordData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a VehicleExitRecord by the provided criteria in the database.
   * @param options - The criteria to find the VehicleExitRecord.
   * @returns A promise that resolves to the found VehicleExitRecord.
   * @throws HttpException if there's an error finding the VehicleExitRecord in the database.
   */
  async getOne(options: GetOneCriteriaType<VehicleExitRecord>): Promise<VehicleExitRecord> {
    try {
      return await this._context.vehicleExitRecord.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a VehicleExitRecord in the database.
   * @param criteria - The criteria to find the VehicleExitRecord to update.
   * @param VehicleExitRecord - The updated VehicleExitRecord object.
   * @returns A promise that resolves to the updated VehicleExitRecord.
   * @throws HttpException if there's an error updating the VehicleExitRecord in the database.
   */
  async update(criteria: UpdateCriteriaType<VehicleExitRecord>, VehicleExitRecord: VehicleExitRecord): Promise<VehicleExitRecord> {
    try {
      const updateVehicleExitRecord = await this._context.vehicleExitRecord.update(criteria, VehicleExitRecord);
      return {
        ...VehicleExitRecord,
        ...updateVehicleExitRecord?.raw[0],
        ...updateVehicleExitRecord?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a VehicleExitRecord from the database.
   * @param criteria - The criteria to find the VehicleExitRecord to delete.
   * @returns A promise that resolves to the deleted VehicleExitRecord.
   * @throws HttpException if there's an error deleting the VehicleExitRecord from the database.
   */
  async delete(criteria: DeleteCriteriaType<VehicleExitRecord>): Promise<VehicleExitRecord> {
    try {
      const deleteVehicleExitRecord = await this._context.vehicleExitRecord.delete(criteria);
      return { ...deleteVehicleExitRecord?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a VehicleExitRecord in the database.
   * @param VehicleExitRecord - The VehicleExitRecord object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved VehicleExitRecord.
   * @throws HttpException if there's an error saving the VehicleExitRecord in the database.
   */
  async save(VehicleExitRecord: VehicleExitRecord, options?: SaveOptionsType<VehicleExitRecord>): Promise<VehicleExitRecord> {
    try {
      const VehicleExitRecordSaved = await this._context.vehicleExitRecord.save(VehicleExitRecord, options);
      return VehicleExitRecordSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }


}
