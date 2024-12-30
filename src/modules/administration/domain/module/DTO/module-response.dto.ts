import { AutoMap } from '@automapper/classes';
import { RoleModule } from '../../roleModule/roleModule.entity';
import { Submodule } from '../../subModule/subModule.entity';

export class ModuleResponseDto {
  @AutoMap()
  id_module: number;

  @AutoMap()
  name_module: string;

  @AutoMap()
  icon: string;

  @AutoMap()
  roleModules: RoleModule[];

  @AutoMap()
  submodules: Submodule[];

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
