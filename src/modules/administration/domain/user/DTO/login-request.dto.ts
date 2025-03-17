import { AutoMap } from '@automapper/classes';
import { IsNumber, IsString } from 'class-validator';

export class LoginRequestDto {
  @AutoMap()
  @IsNumber()
  identificationNumber: number;

  @AutoMap()
  @IsString()
  password: string;
}
