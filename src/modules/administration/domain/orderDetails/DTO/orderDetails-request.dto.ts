import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsDate,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class OrderDetailsRequestDto {
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  brand: string;

  @IsNotEmpty()
  @IsInt()
  @AutoMap()
  yearOfManufacture: number;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  plate_number: string;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  description_problem: string;

  @IsNotEmpty()
  @IsDate()
  @AutoMap()
  dateOfEntry: Date;

  @IsNotEmpty()
  @AutoMap()
  orderId: number; // Identificador de la orden

  @IsNotEmpty()
  @AutoMap()
  orderStatusId: number; // Identificador del estado de la orden

  @IsOptional()
  @AutoMap()
  categoryIds?: number[]; // Identificadores de categorías

  @IsOptional()
  @AutoMap()
  subcategoryIds?: number[]; // Identificadores de subcategorías

  @IsOptional()
  @IsBoolean()
  @AutoMap()
  state?: boolean; // Estado de los detalles de la orden
}
