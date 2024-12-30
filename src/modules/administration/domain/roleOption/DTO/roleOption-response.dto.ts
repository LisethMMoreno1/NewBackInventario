import { AutoMap } from '@automapper/classes';
import { RoleResponseDto } from '../../rol/DTO/rol-response.dto';
import { OptionResponseDto } from '../../option/DTO/option-response.dto';

export class RoleOptionResponseDto {
  @AutoMap()
  id_roleOption: number;

  @AutoMap()
  role: RoleResponseDto;

  @AutoMap()
  option: OptionResponseDto;

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
