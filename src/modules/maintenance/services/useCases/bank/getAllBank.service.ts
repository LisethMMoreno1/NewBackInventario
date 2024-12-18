import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Bank } from 'src/modules/maintenance/domain/bank/bank.entity';
import { BankResponseDto } from 'src/modules/maintenance/domain/bank/DTO/bank-response.dto';
import { BankRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/bank.repository';

/**
 * Service class for deleting a bank.
 */
@Injectable()
export class GetAllBankService {
  /**
   * Constructor for GetOneBankService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _bankRepository - The repository for managing bank entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _bankRepository: BankRepository,
  ) {}

  /**
   * Deletes a bank by its ID.
   * @param id_bank - The ID of the bank to delete.
   * @throws NotFoundException if the bank is not found.
   */
  async getAll(): Promise<BankResponseDto[]> {
    const banks = await this._bankRepository.getAll();

    return banks.map((bank) => this._mapper.map(bank, Bank, BankResponseDto));
  }
}
