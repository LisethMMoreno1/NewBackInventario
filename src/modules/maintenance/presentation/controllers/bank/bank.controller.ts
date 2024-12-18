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
import { BankRequestDto } from 'src/modules/maintenance/domain/bank/DTO/bank-request.dto';
import { BankResponseDto } from 'src/modules/maintenance/domain/bank/DTO/bank-response.dto';
import { CreateBankService } from 'src/modules/maintenance/services/useCases/bank/createBank.service';
import { DeleteBankService } from 'src/modules/maintenance/services/useCases/bank/deleteBank.service';
import { GetAllBankService } from 'src/modules/maintenance/services/useCases/bank/getAllBank.service';
import { GetOneBankService } from 'src/modules/maintenance/services/useCases/bank/getOneBank.service';
import { UpdateBankService } from 'src/modules/maintenance/services/useCases/bank/updateBank.service';

/**
 * Bank controller
 */
@Controller('Bank')
@ApiTags('Banks')
export class BankController {
  constructor(
    private readonly _createBank: CreateBankService,
    private readonly _updateBank: UpdateBankService,
    private readonly _getOneBank: GetOneBankService,
    private readonly _getAllBank: GetAllBankService,
    private readonly _deleteBank: DeleteBankService,
  ) {}

  /**
   * Create a new bank
   * @param bankRequest
   */
  @Post('create')
  async createUser(
    @Body() bankRequest: BankRequestDto,
  ): Promise<BankResponseDto> {
    return await this._createBank.handle(bankRequest);
  }

  /**
   * Update an existing bank
   * @param id
   * @param bankRequest
   */
  @Put(':id')
  async updateBank(
    @Param('id') id_bank: number,
    @Body() bankRequest: BankRequestDto,
  ): Promise<BankResponseDto> {
    return await this._updateBank.update(id_bank, bankRequest);
  }

  /**
   * Delete a bank
   * @param id_bank
   */
  @Delete(':id')
  async deleteBank(@Param('id') id_bank: number): Promise<void> {
    return await this._deleteBank.delete(id_bank);
  }

  /**
   * Get a specific bank by ID
   * @param id_bank
   */
  @Get(':id')
  async getOneBank(@Param('id') id_bank: number): Promise<BankResponseDto> {
    return await this._getOneBank.getOne(id_bank);
  }

  /**
   * Get all banks
   */
  @Get()
  async getAllBanks(): Promise<BankResponseDto[]> {
    return await this._getAllBank.getAll();
  }
}
