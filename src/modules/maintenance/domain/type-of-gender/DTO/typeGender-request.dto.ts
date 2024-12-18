import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class TypeOfGenderRequestDto {
  @IsString()
  @IsNotEmpty()
  @AutoMap()
  name_typeOfGender: string;

  @IsBoolean()
  @AutoMap()
  state?: boolean;
}
