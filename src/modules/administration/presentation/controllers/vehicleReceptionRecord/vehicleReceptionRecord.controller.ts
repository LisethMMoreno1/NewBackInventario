import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';

import { VehicleReceptionRecordRequestDto } from 'src/modules/administration/domain/vehicleReceptionRecord/DTO/vehicleReceptionRecord-request.dto';
import { VehicleReceptionRecordResponseDto } from 'src/modules/administration/domain/vehicleReceptionRecord/DTO/vehicleReceptionRecord-response.dto';
import { CreateVehicleReceptionRecordService } from 'src/modules/administration/services/useCases/vehicleReceptionRecord/createVehicleReceptionRecord.service';
import { DeleteVehicleReceptionRecordService } from 'src/modules/administration/services/useCases/vehicleReceptionRecord/deleteVehicleReceptionRecord.service';
import { GetAllVehicleReceptionRecordService } from 'src/modules/administration/services/useCases/vehicleReceptionRecord/getAllVehicleReceptionRecord.service';
import { GetOneVehicleReceptionRecordService } from 'src/modules/administration/services/useCases/vehicleReceptionRecord/getOneVehicleReceptionRecord.service';
import { UpdateVehicleReceptionRecordService } from 'src/modules/administration/services/useCases/vehicleReceptionRecord/updateVehicleReceptionRecord.service';

/**
 * Controller for Vehicle Reception Records.
 * Provides endpoints to create, update, delete, and retrieve vehicle reception records.
 */
@Controller('vehicle-reception-records')
export class VehicleReceptionRecordController {
  constructor(
    private readonly _createVehicleReceptionRecordService: CreateVehicleReceptionRecordService,
    private readonly _updateVehicleReceptionRecordService: UpdateVehicleReceptionRecordService,
    private readonly _deleteVehicleReceptionRecordService: DeleteVehicleReceptionRecordService,
    private readonly _getAllVehicleReceptionRecordService: GetAllVehicleReceptionRecordService,
    private readonly _getOneVehicleReceptionRecordService: GetOneVehicleReceptionRecordService,
  ) {}

  /**
   * Creates a new vehicle reception record.
   * @param dto The request DTO containing reception record details.
   * @returns The created record as a response DTO.
   */
  @Post()
  async create(
    @Body() dto: VehicleReceptionRecordRequestDto,
  ): Promise<VehicleReceptionRecordResponseDto> {
    return this._createVehicleReceptionRecordService.handle(dto);
  }

  /**
   * Retrieves all vehicle reception records.
   * @returns An array of vehicle reception record response DTOs.
   */
  @Get()
  async getAll(): Promise<VehicleReceptionRecordResponseDto[]> {
    return this._getAllVehicleReceptionRecordService.handle();
  }
  /**
   * Retrieves a single vehicle reception record by its id.
   * @param id The id of the record (must be a number).
   * @returns The found record as a response DTO.
   * @throws NotFoundException if the record does not exist.
   */
  @Get(':id')
  async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VehicleReceptionRecordResponseDto> {
    const record = await this._getOneVehicleReceptionRecordService.handle(id);
    if (!record) {
      throw new NotFoundException(
        `VehicleReceptionRecord with ID ${id} not found.`,
      );
    }
    return record;
  }

  /**
   * Updates an existing vehicle reception record.
   * @param id The id of the record to update (must be a number).
   * @param dto The request DTO with updated data.
   * @returns The updated record as a response DTO.
   * @throws NotFoundException if the record does not exist.
   */
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: VehicleReceptionRecordRequestDto,
  ): Promise<VehicleReceptionRecordResponseDto> {
    const updatedRecord =
      await this._updateVehicleReceptionRecordService.handle(id, dto);
    if (!updatedRecord) {
      throw new NotFoundException(
        `VehicleReceptionRecord with ID ${id} not found.`,
      );
    }
    return updatedRecord;
  }

  /**
   * Deletes a vehicle reception record by its id.
   * @param id The id of the record to delete (must be a number).
   * @returns The deleted record as a response DTO.
   * @throws NotFoundException if the record does not exist.
   */
  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VehicleReceptionRecordResponseDto> {
    const deletedRecord =
      await this._deleteVehicleReceptionRecordService.handle(id);
    if (!deletedRecord) {
      throw new NotFoundException(
        `VehicleReceptionRecord with ID ${id} not found.`,
      );
    }
    return deletedRecord;
  }
}
