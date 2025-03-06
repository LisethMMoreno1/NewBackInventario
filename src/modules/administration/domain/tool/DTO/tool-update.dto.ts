import { IsOptional, IsString } from 'class-validator';

export class ToolUpdateDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
