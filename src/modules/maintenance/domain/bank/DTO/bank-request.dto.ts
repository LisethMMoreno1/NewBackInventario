import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/**
 * A class representing a Bank request DTO.
 */
export class BankRequestDto {
  /**
   * Name of the bank.
   */
  @IsString()
  @IsNotEmpty({ message: 'Campo requerido.' })
  @AutoMap()
  name_bank: string;

  /**
   * Code of the bank.
   * Must be between 3 and 6 digits.
   */
  @IsNumber()
  @IsNotEmpty({ message: 'Campo requerido.' })
  @AutoMap()
  code_bank: number;
}
