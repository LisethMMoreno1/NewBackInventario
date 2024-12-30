import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsDate,
} from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class OrderRequestDto {
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  order_number: string;

  @IsNotEmpty()
  @IsDate()
  @AutoMap()
  date_entry: Date;

  @IsNotEmpty()
  @AutoMap()
  customerId: number; // Identificador del cliente

  @IsOptional()
  @AutoMap()
  orderDetailsId?: number; // Identificador del detalle de la orden

  @IsNotEmpty()
  @AutoMap()
  orderStatusId: number; // Identificador del estado de la orden

  @IsOptional()
  @IsBoolean()
  @AutoMap()
  state?: boolean; // Estado de la orden

  @IsOptional()
  @IsBoolean()
  @AutoMap()
  isActive?: boolean; // Indica si la orden está activa
}
