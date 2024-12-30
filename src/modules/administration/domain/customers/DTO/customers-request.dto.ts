import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CustomerRequestDto {
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  identificationNumber: string;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  name_custumers: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  @AutoMap()
  phone_customers: string;

  @IsNotEmpty()
  @IsEmail()
  @AutoMap()
  email_custumers: string;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  address_custumers: string;

  @IsNotEmpty()
  @AutoMap()
  typeOfIdentificationId: number; // Identificador del tipo de identificación

  @IsOptional()
  @IsBoolean()
  @AutoMap()
  state?: boolean; // Estado del cliente
}
