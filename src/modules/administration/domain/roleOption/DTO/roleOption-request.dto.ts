import { AutoMap } from '@automapper/classes';
import { IsInt, IsBoolean, IsOptional } from 'class-validator';

export class RoleOptionRequestDto {
  @IsInt()
  @AutoMap()
  role_id: number;

  @IsInt()
  @AutoMap()
  option_id: number;

  @IsBoolean()
  @IsOptional()
  @AutoMap()
  state?: boolean;
}
