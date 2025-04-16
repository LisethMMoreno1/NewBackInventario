import { Controller, Post, Body, Delete, Param, Get, Put, ParseIntPipe } from '@nestjs/common';
import { VehicleExitRecordRequestDto } from 'src/modules/administration/domain/vehicleExitRecord/DTO/vehicleExitRecord-request.dto';
import { VehicleExitRecordResponseDto } from 'src/modules/administration/domain/vehicleExitRecord/DTO/vehicleExitRecord-response.dto';
import { CreateVehicleExitRecordService } from 'src/modules/administration/services/useCases/vehicleExitRecord/createVehicleExitRecord.service';
import { DeleteVehicleExitRecordService } from 'src/modules/administration/services/useCases/vehicleExitRecord/deleteVehicleExitRecord.service';
import { GetAllVehicleExitRecordService } from 'src/modules/administration/services/useCases/vehicleExitRecord/getAllVehicleExitRecord.service';
import { GetOneVehicleExitRecordService } from 'src/modules/administration/services/useCases/vehicleExitRecord/getOneVehicleExitRecord.service';
import { UpdateVehicleExitRecordService } from 'src/modules/administration/services/useCases/vehicleExitRecord/updateVehicleExitRecord.service';

@Controller('vehicle-exit-record')
export class VehicleExitRecordController {
    constructor(
        private readonly _createVehicleExitRecordService: CreateVehicleExitRecordService,
        private readonly _deleteVehicleExitRecordService: DeleteVehicleExitRecordService,
        private readonly _getAllVehicleExitRecordService: GetAllVehicleExitRecordService,
        private readonly _getOneVehicleExitRecordService: GetOneVehicleExitRecordService,
        private readonly _updateVehicleExitRecordService: UpdateVehicleExitRecordService,
    ) { }

    @Post()
    async create(
        @Body() createVehicleExitRecordDto: VehicleExitRecordRequestDto,
    ): Promise<VehicleExitRecordResponseDto> {
        console.log("Datos recibidos en el backend:", createVehicleExitRecordDto);
        return this._createVehicleExitRecordService.handle(createVehicleExitRecordDto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this._deleteVehicleExitRecordService.handle(id);
    }

    @Get()
    async getAll(): Promise<VehicleExitRecordResponseDto[]> {
        return this._getAllVehicleExitRecordService.handle();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<VehicleExitRecordResponseDto> {
        return this._getOneVehicleExitRecordService.handle(id);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateVehicleExitRecordDto: VehicleExitRecordRequestDto,
    ): Promise<VehicleExitRecordResponseDto> {
        return this._updateVehicleExitRecordService.handle(id, updateVehicleExitRecordDto);
    }
}
