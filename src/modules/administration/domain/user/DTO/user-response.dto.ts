import { AutoMap } from '@automapper/classes';
import { RolesEnum } from '../../role/roles.enum';

export class UserResponseDto {
  @AutoMap()
  id_user: number;

  @AutoMap()
  identificationNumber: number;

  @AutoMap()
  name: string;

  @AutoMap()
  email: string;

  @AutoMap()
  password?: string;

  @AutoMap()
  tool: number;

  @AutoMap()
  code_tool: string;

  @AutoMap()
  role: RolesEnum;

  @AutoMap()
  state: boolean;

  @AutoMap()
  accessToken?: string;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;

  /*   @AutoMap()
  role: string; */

  @AutoMap()
  roleModule: string[];
}
