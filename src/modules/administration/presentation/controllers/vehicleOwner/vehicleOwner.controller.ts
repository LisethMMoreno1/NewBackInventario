import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { VehicleOwnerRequestDto } from 'src/modules/administration/domain/vehicleOwner/DTO/vehicleOwner-request.dto';
import { VehicleOwnerResponseDto } from 'src/modules/administration/domain/vehicleOwner/DTO/vehicleOwner-response.dto';
import { CreateVehicleOwnerService } from 'src/modules/administration/services/useCases/vehicleOwner/CreateVehicleOwner.service';
import { DeleteVehicleOwnerService } from 'src/modules/administration/services/useCases/vehicleOwner/deleteVehicleOwner.service';
import { GetAllVehicleOwnerService } from 'src/modules/administration/services/useCases/vehicleOwner/getAllVehicleOwner.service';
import { GetOneVehicleOwnerService } from 'src/modules/administration/services/useCases/vehicleOwner/getOneVehicleOwner.service';
import { UpdateVehicleOwnerService } from 'src/modules/administration/services/useCases/vehicleOwner/updateVehicleOwner.service';

@Controller('vehicle-owners')
export class VehicleOwnerController {
  constructor(
    private readonly _createVehicleOwnerService: CreateVehicleOwnerService,
    private readonly _deleteVehicleOwnerService: DeleteVehicleOwnerService,
    private readonly _getAllVehicleOwnerService: GetAllVehicleOwnerService,
    private readonly _getOneVehicleOwnerService: GetOneVehicleOwnerService,
    private readonly _updateVehicleOwnerService: UpdateVehicleOwnerService,
  ) {}

  @Post()
  async create(
    @Body() dto: VehicleOwnerRequestDto,
  ): Promise<VehicleOwnerResponseDto> {
    return this._createVehicleOwnerService.handle(dto);
  }

  @Get()
  async getAll(): Promise<VehicleOwnerResponseDto[]> {
    return this._getAllVehicleOwnerService.handle();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<VehicleOwnerResponseDto> {
    return this._getOneVehicleOwnerService.handle(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: VehicleOwnerRequestDto,
  ): Promise<VehicleOwnerResponseDto> {
    return this._updateVehicleOwnerService.handle(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this._deleteVehicleOwnerService.handle(id);
  }
}
