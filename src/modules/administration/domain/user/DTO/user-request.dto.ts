import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UserRequestDto {
  @IsNotEmpty()
  @AutoMap()
  identificationNumber: number;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(1, 50)
  @AutoMap()
  email: string;

  @IsOptional()
  @IsString()
  @Length(8, 250)
  @AutoMap()
  password: string;

  // Se espera únicamente el código de la herramienta.
  @IsNotEmpty({ message: 'code_tool must not be empty' })
  @IsString()
  @AutoMap()
  code_tool: string;

  @IsBoolean()
  @IsOptional()
  state?: boolean;

  @IsOptional()
  @IsString()
  @AutoMap()
  accessToken: string;
}
