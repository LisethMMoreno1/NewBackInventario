import { AutoMap } from '@automapper/classes';

export class TypeOfCurrencyResponseDto {
  @AutoMap()
  id_typeOfCurrency: number;

  @AutoMap()
  country_typeOfCurrency: string;

  @AutoMap()
  divisa_typeOfCurrency: string;

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
