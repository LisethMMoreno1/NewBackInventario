import { AutoMap } from '@automapper/classes';
import { IsInt, IsOptional } from 'class-validator';

export class RoleModuleRequestDto {
  @IsInt()
  @AutoMap()
  role_id: number;

  @IsInt()
  @AutoMap()
  module_id: number;

  @IsInt()
  @IsOptional()
  @AutoMap()
  submodule_id?: number;
}
