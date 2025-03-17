import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { RolesEnum } from '../../role/roles.enum';

export class UserRequestDto {
  @IsNotEmpty()
  @IsInt()
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

  @IsNotEmpty({ message: 'code_tool must not be empty' })
  @IsString()
  @AutoMap()
  code_tool: string;

  @IsNotEmpty()
  @IsEnum(RolesEnum, {
    message: `El rol debe ser uno de los siguientes: ${Object.values(RolesEnum).join(', ')}`,
  })
  @AutoMap()
  role: RolesEnum;

  @IsBoolean()
  @IsOptional()
  state?: boolean;

  @IsOptional()
  @IsString()
  @AutoMap()
  accessToken: string;
}
