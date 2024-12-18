import { AutoMap } from '@automapper/classes';

/**
 * A class representing a Bank response dto.
 */
export class BankResponseDto {
  /**
   * Bank response id_bank
   */
  @AutoMap()
  id_bank: number;

  /**
   * Bank response code_bank
   */
  @AutoMap()
  code_bank: number;

  /**
   * Bank response name_bank
   */
  @AutoMap()
  name_bank: string;

  /**
   * Bank response state
   */
  @AutoMap()
  state: boolean;

  /**
   * Bank response created_at
   */
  @AutoMap()
  created_at: Date;

  /**
   * Bank response updated_at
   */
  @AutoMap()
  updated_at: Date;
}
