import { AutoMap } from '@automapper/classes';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class RoleResponseDto {
  @IsString()
  @AutoMap()
  name_rol: string;

  @IsString()
  @AutoMap()
  description: string;

  @IsBoolean()
  @IsOptional()
  @AutoMap()
  state: boolean;
}
