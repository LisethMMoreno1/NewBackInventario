import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

/**
 * DTO for creating or updating a Role.
 */
export class RoleRequestDto {
  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name_rol: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  state?: boolean;
}
