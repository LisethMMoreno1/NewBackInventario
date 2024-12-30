import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class OrderStatusRequestDto {
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  order_status: string;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  description: string;

  @IsOptional()
  @IsBoolean()
  @AutoMap()
  state?: boolean; // Estado del estado de la orden
}
