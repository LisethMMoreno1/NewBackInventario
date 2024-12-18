import { AutoMap } from '@automapper/classes';
import { IsString } from 'class-validator';

export class TypeOfAddressRequestDto {
  @AutoMap()
  @IsString()
  name_typeOfAddress: string;

  @AutoMap()
  state: boolean;
}
