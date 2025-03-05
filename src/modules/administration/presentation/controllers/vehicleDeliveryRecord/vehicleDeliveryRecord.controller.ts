import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { VehicleDeliveryRecordResponseDto } from 'src/modules/administration/domain/vehicleDeliveryRecord/DTO/vehicleDeliveryRecord-response.dto';
import { VehicleDeliveryRecordRequestDto } from 'src/modules/administration/domain/vehicleDeliveryRecord/DTO/vehicleDeliveryRecord-resquest.dto';
import { CreateVehicleDeliveryRecordService } from 'src/modules/administration/services/useCases/vehicleDeliveryRecord/createVehicleDeliveryRecord.service';
import { DeleteVehicleDeliveryRecordService } from 'src/modules/administration/services/useCases/vehicleDeliveryRecord/deleteVehicleDeliveryRecord.service';
import { GetAllVehicleDeliveryRecordService } from 'src/modules/administration/services/useCases/vehicleDeliveryRecord/getAllVehicleDeliveryRecord.service';
import { GetOneVehicleDeliveryRecordService } from 'src/modules/administration/services/useCases/vehicleDeliveryRecord/getOneVehicleDeliveryRecord.service';
import { UpdateVehicleDeliveryRecordService } from 'src/modules/administration/services/useCases/vehicleDeliveryRecord/updateVehicleDeliveryRecord.service';

/**
 * Controller for Vehicle Delivery Records.
 * It provides endpoints to create, update, delete, and retrieve vehicle delivery records.
 */
@Controller('vehicle-delivery-records')
export class VehicleDeliveryRecordController {
  constructor(
    private readonly _createVehicleDeliveryRecordService: CreateVehicleDeliveryRecordService,
    private readonly _updateVehicleDeliveryRecordService: UpdateVehicleDeliveryRecordService,
    private readonly _deleteVehicleDeliveryRecordService: DeleteVehicleDeliveryRecordService,
    private readonly _getAllVehicleDeliveryRecordService: GetAllVehicleDeliveryRecordService,
    private readonly _getOneVehicleDeliveryRecordService: GetOneVehicleDeliveryRecordService,
  ) {}

  /**
   * Creates a new vehicle delivery record.
   * @param dto The request DTO containing delivery record details.
   * @returns The created record as a response DTO.
   */
  @Post()
  async create(
    @Body() dto: VehicleDeliveryRecordRequestDto,
  ): Promise<VehicleDeliveryRecordResponseDto> {
    return this._createVehicleDeliveryRecordService.handle(dto);
  }

  /**
   * Retrieves all vehicle delivery records.
   * @returns An array of vehicle delivery record response DTOs.
   */
  @Get()
  async getAll(): Promise<VehicleDeliveryRecordResponseDto[]> {
    return this._getAllVehicleDeliveryRecordService.handle();
  }

  /**
   * Retrieves a single vehicle delivery record by its id.
   * @param id The id of the record.
   * @returns The found record as a response DTO.
   */
  @Get(':id')
  async getOne(
    @Param('id') id: number,
  ): Promise<VehicleDeliveryRecordResponseDto> {
    return this._getOneVehicleDeliveryRecordService.handle(id);
  }

  /**
   * Updates an existing vehicle delivery record.
   * @param id The id of the record to update.
   * @param dto The request DTO with updated data.
   * @returns The updated record as a response DTO.
   */
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: VehicleDeliveryRecordRequestDto,
  ): Promise<VehicleDeliveryRecordResponseDto> {
    return this._updateVehicleDeliveryRecordService.handle(id, dto);
  }

  /**
   * Deletes a vehicle delivery record by its id.
   * @param id The id of the record to delete.
   * @returns The deleted record as a response DTO.
   */
  @Delete(':id')
  async delete(
    @Param('id') id: number,
  ): Promise<VehicleDeliveryRecordResponseDto> {
    return this._deleteVehicleDeliveryRecordService.handle(id);
  }
}
