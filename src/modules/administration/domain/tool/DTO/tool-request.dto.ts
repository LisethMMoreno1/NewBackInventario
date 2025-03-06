import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsString, Length, IsOptional } from 'class-validator';

export class ToolRequestDto {
  @AutoMap()
  @IsNotEmpty()
  @IsString()
  name: string;

  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @Length(1, 1)
  type: string;

  @AutoMap()
  @IsNotEmpty()
  @IsString()
  code: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  description?: string;

  @AutoMap()
  state?: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
