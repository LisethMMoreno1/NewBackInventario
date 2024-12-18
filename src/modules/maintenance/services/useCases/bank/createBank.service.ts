import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { ConflictException, Injectable } from '@nestjs/common';
import { Bank } from 'src/modules/maintenance/domain/bank/bank.entity';
import { BankRequestDto } from 'src/modules/maintenance/domain/bank/DTO/bank-request.dto';
import { BankResponseDto } from 'src/modules/maintenance/domain/bank/DTO/bank-response.dto';
import { BankRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/bank.repository';

/**
 * Service class for creating a new bank.
 */
@Injectable()
export class CreateBankService {
  /**
   * Creates an instance of the CreatebankService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _bankRepository - The repository for managing bank entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _bankRepository: BankRepository,
  ) {}

  /**
   * Handle the creation of a new bank
   * Creates a new bank.
   * @param bank - The bank to be created.
   * @returns The created bank.
   */
  async handle(bankRequest: BankRequestDto): Promise<BankResponseDto> {
    const bankMap = this._mapper.map(bankRequest, BankRequestDto, Bank);

    const existbank = await this._bankRepository.getOne({
      where: [
        {
          id_bank: bankMap?.id_bank,
        },
      ],
    });

    if (existbank?.code_bank)
      throw new ConflictException('Ya existe un banco con ese codigo');

    const bank = await this._bankRepository.create(bankMap);

    const response = this._mapper.map(bank, Bank, BankResponseDto);

    return response;
  }
}
