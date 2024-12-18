import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TypeOfCurrencyRequestDto } from 'src/modules/maintenance/domain/type-of-currency/DTO/typeCurrency-request.dto';
import { TypeOfCurrencyResponseDto } from 'src/modules/maintenance/domain/type-of-currency/DTO/typeCurrency-response.dto';
import { CreateTypeOfCurrencyService } from 'src/modules/maintenance/services/useCases/type-of-currency/createTypeCurrency.service';
import { DeleteTypeOfCurrencyService } from 'src/modules/maintenance/services/useCases/type-of-currency/deleteTypeCurrency.service';
import { GetAllTypeOfCurrencyService } from 'src/modules/maintenance/services/useCases/type-of-currency/getAllTypeCurrency.service';
import { GetOneTypeOfCurrencyService } from 'src/modules/maintenance/services/useCases/type-of-currency/getOneTypeCurrency.service';
import { UpdateTypeOfCurrencyService } from 'src/modules/maintenance/services/useCases/type-of-currency/updateTypeCurrency.service';

/**
 * TypeOfCurrency controller
 */
@Controller('TypeOfCurrency')
@ApiTags('TypeOfCurrency')
export class TypeOfCurrencyController {
  constructor(
    private readonly _createTypeOfCurrency: CreateTypeOfCurrencyService,
    private readonly _updateTypeOfCurrency: UpdateTypeOfCurrencyService,
    private readonly _getOneTypeOfCurrency: GetOneTypeOfCurrencyService,
    private readonly _getAllTypeOfCurrency: GetAllTypeOfCurrencyService,
    private readonly _deleteTypeOfCurrency: DeleteTypeOfCurrencyService,
  ) {}

  /**
   * Create a new TypeOfCurrency
   * @param typeOfCurrencyRequest
   */
  @Post('create')
  async create(
    @Body() typeOfCurrencyRequest: TypeOfCurrencyRequestDto,
  ): Promise<TypeOfCurrencyResponseDto> {
    return await this._createTypeOfCurrency.handle(typeOfCurrencyRequest);
  }

  /**
   * Update an existing TypeOfCurrency
   * @param id_TypeOfCurrency
   * @param typeOfCurrencyRequest
   */
  @Put(':id')
  async updateTypeOfCurrency(
    @Param('id') id_TypeOfCurrency: number,
    @Body() typeOfCurrencyRequest: TypeOfCurrencyRequestDto,
  ): Promise<TypeOfCurrencyResponseDto> {
    return await this._updateTypeOfCurrency.update(
      id_TypeOfCurrency,
      typeOfCurrencyRequest,
    );
  }

  /**
   * Delete a TypeOfCurrency
   * @param id_TypeOfCurrency
   */
  @Delete(':id')
  async deleteTypeOfCurrency(
    @Param('id') id_TypeOfCurrency: number,
  ): Promise<void> {
    return await this._deleteTypeOfCurrency.delete(id_TypeOfCurrency);
  }

  /**
   * Get a specific TypeOfCurrency by ID
   * @param id_TypeOfCurrency
   */
  @Get(':id')
  async getOneTypeOfCurrency(
    @Param('id') id_TypeOfCurrency: number,
  ): Promise<TypeOfCurrencyResponseDto> {
    return await this._getOneTypeOfCurrency.getOne(id_TypeOfCurrency);
  }

  /**
   * Get all TypeOfCurrency entries
   */
  @Get()
  async getAll(): Promise<TypeOfCurrencyResponseDto[]> {
    return await this._getAllTypeOfCurrency.getAll();
  }
}
