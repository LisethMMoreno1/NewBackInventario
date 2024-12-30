import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class ModuleRequestDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @AutoMap()
  name_module: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @AutoMap()
  icon?: string;

  @IsOptional()
  @IsBoolean()
  @AutoMap()
  state?: boolean;
}
