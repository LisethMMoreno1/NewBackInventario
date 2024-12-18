import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Bank } from 'src/modules/maintenance/domain/bank/bank.entity';
import { BankRequestDto } from 'src/modules/maintenance/domain/bank/DTO/bank-request.dto';
import { BankResponseDto } from 'src/modules/maintenance/domain/bank/DTO/bank-response.dto';
import { BankRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/bank.repository';

/**
 * Service class for creating a new bank.
 */
@Injectable()
export class UpdateBankService {
  /**
   * Update an instance of the UpdateBankService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _bankRepository - The repository for managing bank entities.
   *
   */

  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _bankRepository: BankRepository,
  ) {}

  async update(
    id_bank: number,
    bankRequest: BankRequestDto,
  ): Promise<BankResponseDto> {
    const existingBank = await this._bankRepository.getOne({
      where: { id_bank },
    });

    if (!existingBank) {
      throw new NotFoundException('El banco no fue encontrado.');
    }

    const updatedBankData = this._mapper.map(bankRequest, BankRequestDto, Bank);
    const updatedBank = await this._bankRepository.update(
      id_bank,
      updatedBankData,
    );

    return this._mapper.map(updatedBank, Bank, BankResponseDto);
  }
}
