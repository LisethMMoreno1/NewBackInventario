import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BankRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/bank.repository';

/**
 * Service class for deleting a bank.
 */
@Injectable()
export class DeleteBankService {
  /**
   * Constructor for DeleteBankService.
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
  async delete(id_bank: number): Promise<void> {
    const existingBank = await this._bankRepository.getOne({
      where: { id_bank },
    });

    if (!existingBank) {
      throw new NotFoundException('El banco no fue encontrado.');
    }

    await this._bankRepository.delete(id_bank);
  }
}
