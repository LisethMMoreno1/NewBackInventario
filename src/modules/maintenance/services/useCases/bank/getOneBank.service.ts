import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Bank } from 'src/modules/maintenance/domain/bank/bank.entity';
import { BankResponseDto } from 'src/modules/maintenance/domain/bank/DTO/bank-response.dto';
import { BankRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/bank.repository';

/**
 * Service class for deleting a bank.
 */
@Injectable()
export class GetOneBankService {
  /**
   * Constructor for GetAllBankService.
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
  async getOne(id_bank: number): Promise<BankResponseDto> {
    const bank = await this._bankRepository.getOne({
      where: { id_bank },
    });

    if (!bank) {
      throw new NotFoundException('El banco no fue encontrado.');
    }

    return this._mapper.map(bank, Bank, BankResponseDto);
  }
}
