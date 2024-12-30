import { AutoMap } from '@automapper/classes';
import { ModuleResponseDto } from '../../module/DTO/module-response.dto';
import { RoleModuleResponseDto } from '../../roleModule/DTO/roleModule-response.dto';
import { OptionResponseDto } from '../../option/DTO/option-response.dto';

export class SubmoduleResponseDto {
  @AutoMap()
  id_subModule: number;

  @AutoMap()
  name_subModule: string;

  @AutoMap()
  module: ModuleResponseDto; // Ahora se usa ModuleResponseDto en lugar de any

  @AutoMap()
  roleModules: RoleModuleResponseDto[]; // Ahora se usa RoleModuleResponseDto[] en lugar de any[]

  @AutoMap()
  options: OptionResponseDto[]; // Ahora se usa OptionResponseDto[] en lugar de any[]

  @AutoMap()
  submodule: SubmoduleResponseDto; // Ahora se usa SubmoduleResponseDto en lugar de any

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
