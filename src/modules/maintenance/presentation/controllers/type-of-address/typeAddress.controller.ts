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
import { TypeOfAddressRequestDto } from 'src/modules/maintenance/domain/type-of-address/DTO/typeAddress-request.dto';
import { TypeOfAddressResponseDto } from 'src/modules/maintenance/domain/type-of-address/DTO/typeAddress-response.dto';
import { CreateTypeOfAddressService } from 'src/modules/maintenance/services/useCases/type-of-address/createTypeAddress.service';
import { DeleteTypeOfAddressService } from 'src/modules/maintenance/services/useCases/type-of-address/deleteTypeAddress.service';
import { GetAllTypeOfAddressService } from 'src/modules/maintenance/services/useCases/type-of-address/getAllTypeAddress.service';
import { GetOneTypeOfAddressService } from 'src/modules/maintenance/services/useCases/type-of-address/getOneTypeAddress.service';
import { UpdateTypeOfAddressService } from 'src/modules/maintenance/services/useCases/type-of-address/updateTypeAddress.service';

/**
 * TypeOfAddress controller
 */
@Controller('TypeOfAddress')
@ApiTags('TypeOfAddress')
export class TypeOfAddressController {
  constructor(
    private readonly _createTypeOfAddress: CreateTypeOfAddressService,
    private readonly _updateTypeOfAddress: UpdateTypeOfAddressService,
    private readonly _getOneTypeOfAddress: GetOneTypeOfAddressService,
    private readonly _getAllTypeOfAddress: GetAllTypeOfAddressService,
    private readonly _deleteTypeOfAddress: DeleteTypeOfAddressService,
  ) {}

  /**
   * Create a new TypeOfAddress
   * @param TypeOfAddressRequest
   */
  @Post('create')
  async create(
    @Body() typeOfAddressRequest: TypeOfAddressRequestDto,
  ): Promise<TypeOfAddressResponseDto> {
    return await this._createTypeOfAddress.handle(typeOfAddressRequest);
  }

  /**
   * Update an existing TypeOfAddress
   * @param id_TypeOfAddress
   * @param TypeOfAddressRequest
   */
  @Put(':id')
  async updateTypeOfAddress(
    @Param('id') id_TypeOfAddress: number,
    @Body() typeOfAddressRequest: TypeOfAddressRequestDto,
  ): Promise<TypeOfAddressResponseDto> {
    return await this._updateTypeOfAddress.update(
      id_TypeOfAddress,
      typeOfAddressRequest,
    );
  }

  /**
   * Delete a TypeOfAddress
   * @param id_TypeOfAddress
   */
  @Delete(':id')
  async deleteTypeOfAddress(
    @Param('id') id_TypeOfAddress: number,
  ): Promise<void> {
    return await this._deleteTypeOfAddress.delete(id_TypeOfAddress);
  }

  /**
   * Get a specific TypeOfAddress by ID
   * @param id_TypeOfAddress
   */
  @Get(':id')
  async getOneTypeOfAddress(
    @Param('id') id_TypeOfAddress: number,
  ): Promise<TypeOfAddressResponseDto> {
    return await this._getOneTypeOfAddress.getOne(id_TypeOfAddress);
  }

  /**
   * Get all TypeOfAddress entries
   */
  @Get()
  async getAll(): Promise<TypeOfAddressResponseDto[]> {
    return await this._getAllTypeOfAddress.getAll();
  }
}
