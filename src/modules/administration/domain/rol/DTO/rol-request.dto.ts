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
  name_rol: string; // Role name (e.g., Administrator, User, etc.)

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string; // Optional role description

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  state?: boolean; // Active or inactive state
}
