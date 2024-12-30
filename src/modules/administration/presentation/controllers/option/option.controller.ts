import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { OptionRequestDto } from 'src/modules/administration/domain/option/DTO/option-request.dto';
import { OptionResponseDto } from 'src/modules/administration/domain/option/DTO/option-response.dto';
import { CreateOptionService } from 'src/modules/administration/services/useCases/option/createOption.service';
import { DeleteOptionService } from 'src/modules/administration/services/useCases/option/deleteOption.service';
import { GetAllOptionService } from 'src/modules/administration/services/useCases/option/getAllOption.service';
import { GetOneOptionService } from 'src/modules/administration/services/useCases/option/getOneOption.service';
import { UpdateOptionService } from 'src/modules/administration/services/useCases/option/updateOption.service';

@Controller('options')
export class OptionController {
  constructor(
    private readonly _createOptionService: CreateOptionService,
    private readonly _deleteOptionService: DeleteOptionService,
    private readonly _getAllOptionService: GetAllOptionService,
    private readonly _getOneOptionService: GetOneOptionService,
    private readonly _updateOptionService: UpdateOptionService,
  ) {}

  @Post()
  async createOption(@Body() optionRequestDto: OptionRequestDto) {
    const { submodule_id } = optionRequestDto;

    if (isNaN(submodule_id)) {
      throw new HttpException(
        'submodule_id must be a number',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this._createOptionService.handle(optionRequestDto);
  }

  @Get()
  async getAllOptions(): Promise<OptionResponseDto[]> {
    try {
      return await this._getAllOptionService.handle();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async getOneOption(@Param('id') id: number): Promise<OptionResponseDto> {
    try {
      return await this._getOneOptionService.handle(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  async updateOption(
    @Param('id') id: number,
    @Body() optionRequestDto: OptionRequestDto,
  ): Promise<OptionResponseDto> {
    try {
      return await this._updateOptionService.handle(id, optionRequestDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteOption(@Param('id') id: number): Promise<void> {
    try {
      await this._deleteOptionService.handle(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
