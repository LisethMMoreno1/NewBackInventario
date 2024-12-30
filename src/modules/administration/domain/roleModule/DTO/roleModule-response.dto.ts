import { AutoMap } from '@automapper/classes';
import { RoleResponseDto } from '../../rol/DTO/rol-response.dto';
import { ModuleResponseDto } from '../../module/DTO/module-response.dto';
import { SubmoduleResponseDto } from '../../subModule/DTO/subModule-response.dto';

export class RoleModuleResponseDto {
  @AutoMap()
  id_roleModule: number;

  @AutoMap()
  role: RoleResponseDto;

  @AutoMap()
  module: ModuleResponseDto;

  @AutoMap()
  submodule: SubmoduleResponseDto;
}
