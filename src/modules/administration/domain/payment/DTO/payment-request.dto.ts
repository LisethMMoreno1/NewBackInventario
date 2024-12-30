import {
  IsNumber,
  IsString,
  IsDate,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class PaymentRequestDto {
  @IsNotEmpty()
  @IsNumber()
  @AutoMap()
  sub_total: number;

  @IsNotEmpty()
  @IsNumber()
  @AutoMap()
  taxes: number;

  @IsNotEmpty()
  @IsNumber()
  @AutoMap()
  shipping: number;

  @IsNotEmpty()
  @IsNumber()
  @AutoMap()
  total: number;

  @IsNotEmpty()
  @IsDate()
  @AutoMap()
  dateOfPayment: Date;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  order_number: string;

  @IsNotEmpty()
  @AutoMap()
  id_order: number; // Identificador de la orden

  @IsNotEmpty()
  @AutoMap()
  customerId: number; // Identificador del cliente

  @IsNotEmpty()
  @AutoMap()
  bankId: number; // Identificador del banco

  @IsOptional()
  @IsBoolean()
  @AutoMap()
  state?: boolean; // Estado del pago
}
