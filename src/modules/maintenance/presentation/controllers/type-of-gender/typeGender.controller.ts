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
import { TypeOfGenderRequestDto } from 'src/modules/maintenance/domain/type-of-gender/DTO/typeGender-request.dto';
import { TypeOfGenderResponseDto } from 'src/modules/maintenance/domain/type-of-gender/DTO/typeGender-response.dto';
import { CreateTypeOfGenderService } from 'src/modules/maintenance/services/useCases/type-of-gender/createTypeGender.service';
import { DeleteTypeOfGenderService } from 'src/modules/maintenance/services/useCases/type-of-gender/deleteTypeGender.service';
import { GetAllTypeGenderService } from 'src/modules/maintenance/services/useCases/type-of-gender/getAllTypeGender.service';
import { GetOneTypeOfGenderService } from 'src/modules/maintenance/services/useCases/type-of-gender/getOneTypeGender.service';
import { UpdateTypeOfGenderService } from 'src/modules/maintenance/services/useCases/type-of-gender/updateTypeGender.service';

/**
 * TypeOfGender controller
 */
@Controller('TypeOfGender')
@ApiTags('TypeOfGender')
export class TypeOfGenderController {
  constructor(
    private readonly _createTypeOfGender: CreateTypeOfGenderService,
    private readonly _updateTypeOfGender: UpdateTypeOfGenderService,
    private readonly _getOneTypeOfGender: GetOneTypeOfGenderService,
    private readonly _getAllTypeOfGender: GetAllTypeGenderService,
    private readonly _deleteTypeOfGender: DeleteTypeOfGenderService,
  ) {}

  /**
   * Create a new TypeOfGender
   * @param typeOfGenderRequest
   */
  @Post('create')
  async createTypeOfGender(
    @Body() typeOfGenderRequest: TypeOfGenderRequestDto,
  ): Promise<TypeOfGenderResponseDto> {
    return await this._createTypeOfGender.handle(typeOfGenderRequest);
  }

  /**
   * Update an existing TypeOfGender
   *
   * @param typeOfGenderRequest
   */
  @Put(':id')
  async updateTypeOfGender(
    @Param('id') id_typeOfGender: number,
    @Body() typeOfGenderRequest: TypeOfGenderRequestDto,
  ): Promise<TypeOfGenderResponseDto> {
    return await this._updateTypeOfGender.update(
      id_typeOfGender,
      typeOfGenderRequest,
    );
  }

  /**
   * Delete a TypeOfGender
   * @param id_typeOfGender
   */
  @Delete(':id')
  async deleteTypeOfGender(
    @Param('id') id_typeOfGender: number,
  ): Promise<void> {
    return await this._deleteTypeOfGender.delete(id_typeOfGender);
  }

  /**
   * Get a specific TypeOfGender by ID
   * @param id_typeOfGender
   */
  @Get(':id')
  async getOneTypeOfGender(
    @Param('id') id_typeOfGender: number,
  ): Promise<TypeOfGenderResponseDto> {
    return await this._getOneTypeOfGender.getOne(id_typeOfGender);
  }

  /**
   * Get all TypeOfGender entries
   */
  @Get()
  async getAllTypeOfGender(): Promise<TypeOfGenderResponseDto[]> {
    return await this._getAllTypeOfGender.getAll();
  }
}
