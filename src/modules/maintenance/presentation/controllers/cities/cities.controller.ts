import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CityRequestDto } from 'src/modules/maintenance/domain/cities/DTO/cities-request.dto';
import { CityResponseDto } from 'src/modules/maintenance/domain/cities/DTO/cities-responce.dto';
import { CreateCityService } from 'src/modules/maintenance/services/useCases/cities/createCities.service';
import { DeleteCityService } from 'src/modules/maintenance/services/useCases/cities/deleteCities.service';
import { GetAllCityService } from 'src/modules/maintenance/services/useCases/cities/getAllCities.service';
import { GetCitiesByCodeService } from 'src/modules/maintenance/services/useCases/cities/getCitiesByCode.service';
import { GetOneCityService } from 'src/modules/maintenance/services/useCases/cities/getOneCities.service';
import { UpdateCityService } from 'src/modules/maintenance/services/useCases/cities/updateCities.service';

@ApiTags('Cities')
@Controller('api/cities')
export class CitiesController {
  constructor(
    private readonly _createCityService: CreateCityService,
    private readonly _getAllCityService: GetAllCityService,
    private readonly _getOneCityService: GetOneCityService,
    private readonly _updateCityService: UpdateCityService,
    private readonly _deleteCityService: DeleteCityService,
    private readonly _getCitiesByCodeService: GetCitiesByCodeService,
  ) {}

  // Create a new city
  @Post()
  async create(
    @Body() createCityDto: CityRequestDto,
  ): Promise<CityResponseDto> {
    return this._createCityService.handle(createCityDto);
  }

  // Get all cities
  @Get()
  async getAll(): Promise<CityResponseDto[]> {
    return this._getAllCityService.handle();
  }

  // Get a city by ID
  @Get(':id')
  async findCityById(@Param('id') id: number): Promise<CityResponseDto> {
    return this._getOneCityService.handle(id);
  }

  // Get cities by city code
  @Get('code/:code')
  async getCitiesByCode(
    @Param('code') code_city: number,
  ): Promise<CityResponseDto[]> {
    return this._getCitiesByCodeService.handle(code_city);
  }

  // Update a city
  // En el controlador
  @Put(':id')
  async update(
    @Param('id') id_city: number,
    @Body() cityRequest: CityRequestDto,
  ): Promise<CityResponseDto> {
    return this._updateCityService.handle(id_city, cityRequest);
  }

  // Delete a city
  @Delete(':id')
  async delete(@Param('id') id_city: number): Promise<void> {
    return this._deleteCityService.handle(id_city);
  }
}
