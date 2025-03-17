import { AutoMap } from '@automapper/classes';
import { RolesEnum } from '../roles.enum';

export class RolesResponseDto {
  @AutoMap()
  role: RolesEnum;
  @AutoMap()
  description?: string;
}
