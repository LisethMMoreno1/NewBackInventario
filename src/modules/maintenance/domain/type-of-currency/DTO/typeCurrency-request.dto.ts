import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class TypeOfCurrencyRequestDto {
  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  country_typeOfCurrency: string;

  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  divisa_typeOfCurrency: string;

  @AutoMap()
  @IsBoolean()
  state: boolean;
}
