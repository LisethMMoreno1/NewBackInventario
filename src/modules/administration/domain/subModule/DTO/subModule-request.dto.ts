import { IsInt, IsString, IsBoolean, IsOptional } from 'class-validator';

export class SubmoduleRequestDto {
  @IsString()
  name_subModule: string;

  @IsInt()
  module_id: number;

  @IsInt()
  @IsOptional()
  submodule_id?: number;

  @IsBoolean()
  @IsOptional()
  state?: boolean;
}
