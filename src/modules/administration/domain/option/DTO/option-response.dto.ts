import { AutoMap } from '@automapper/classes';
import { Submodule } from '../../subModule/subModule.entity';

export class OptionResponseDto {
  @AutoMap()
  id_option: number;

  @AutoMap()
  name_option: string;

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;

  @AutoMap()
  submodule: Submodule;
}
