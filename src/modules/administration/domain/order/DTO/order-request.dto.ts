import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class OrderRequestDto {
  @IsNotEmpty()
  @IsNumber()
  @AutoMap()
  receptionRecordId: number;

  @IsOptional()
  @IsNumber()
  @AutoMap()
  deliveryRecordId?: number;

  @IsOptional()
  @IsString()
  @AutoMap()
  workDetails?: string;

  @IsNumber()
  @AutoMap()
  cost: number;

  @IsOptional()
  @IsString()
  @AutoMap()
  status: string;
}
