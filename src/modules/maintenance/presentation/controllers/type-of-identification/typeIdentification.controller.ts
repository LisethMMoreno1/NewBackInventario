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
import { TypeOfIdentificationRequestDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-request.dto';
import { TypeOfIdentificationResponseDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-response.dto';
import { CreateTypeIdentificationService } from 'src/modules/maintenance/services/useCases/type-of-identification/createTypeIdentification.service';
import { DeleteTypeIdentificationService } from 'src/modules/maintenance/services/useCases/type-of-identification/deleteTypeIdentification.service';
import { GetAllTypeIdentificationService } from 'src/modules/maintenance/services/useCases/type-of-identification/getAllTypeIdentification.service';
import { GetOneTypeIdentificationService } from 'src/modules/maintenance/services/useCases/type-of-identification/getOneTypeIdentification.service';
import { UpdateTypeIdentificationService } from 'src/modules/maintenance/services/useCases/type-of-identification/updateTypeIdentification.service';

/**
 * TypeOfIdentification controller
 */
@Controller('TypeOfIdentification')
@ApiTags('TypeOfIdentification')
export class TypeOfIdentificationController {
  constructor(
    private readonly _createTypeOfIdentification: CreateTypeIdentificationService,
    private readonly _updateTypeOfIdentification: UpdateTypeIdentificationService,
    private readonly _getOneTypeOfIdentification: GetOneTypeIdentificationService,
    private readonly _getAllTypeOfIdentification: GetAllTypeIdentificationService,
    private readonly _deleteTypeOfIdentification: DeleteTypeIdentificationService,
  ) {}

  /**
   * Create a new TypeOfIdentification
   * @param typeOfIdentificationRequest
   */
  @Post('create')
  async createTypeOfIdentification(
    @Body() typeOfIdentificationRequest: TypeOfIdentificationRequestDto,
  ): Promise<TypeOfIdentificationResponseDto> {
    return await this._createTypeOfIdentification.handle(
      typeOfIdentificationRequest,
    );
  }

  /**
   * Update an existing TypeOfIdentification
   *
   * @param typeOfIdentificationRequest
   */
  @Put(':id')
  async updateTypeOfIdentification(
    @Param('id') id_typeIdentification: number,
    @Body() typeOfIdentificationRequest: TypeOfIdentificationRequestDto,
  ): Promise<TypeOfIdentificationResponseDto> {
    return await this._updateTypeOfIdentification.update(
      id_typeIdentification,
      typeOfIdentificationRequest,
    );
  }

  /**
   * Delete a TypeOfIdentification
   * @param id_typeIdentification
   */
  @Delete(':id')
  async deleteTypeOfIdentification(
    @Param('id') id_typeIdentification: number,
  ): Promise<void> {
    return await this._deleteTypeOfIdentification.delete(id_typeIdentification);
  }

  /**
   * Get a specific TypeOfIdentification by ID
   * @param id_typeIdentification
   */
  @Get(':id')
  async getOneTypeOfIdentification(
    @Param('id') id_typeIdentification: number,
  ): Promise<TypeOfIdentificationResponseDto> {
    return await this._getOneTypeOfIdentification.getOne(id_typeIdentification);
  }

  /**
   * Get all TypeOfIdentification entries
   */
  @Get()
  async getAllTypeOfIdentification(): Promise<
    TypeOfIdentificationResponseDto[]
  > {
    return await this._getAllTypeOfIdentification.getAll();
  }
}
