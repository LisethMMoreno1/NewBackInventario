import { AutoMap } from '@automapper/classes';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class OptionRequestDto {
  @IsString()
  @AutoMap()
  name_option: string;

  @IsBoolean()
  @IsOptional()
  @AutoMap()
  state?: boolean;

  @IsOptional()
  @AutoMap()
  submodule_id?: number;
}
