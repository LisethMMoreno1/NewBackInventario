import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  IsEmail,
} from 'class-validator';

export class VehicleOwnerRequestDto {
  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  fullName: string;

  @AutoMap()
  @IsNotEmpty()
  identificationNumber: number;

  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @Length(7, 20)
  phoneNumber: string;

  @AutoMap()
  @IsOptional()
  @IsEmail()
  email?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(5, 200)
  address?: string;

  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  vehicleBrand: string;

  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  vehicleModel: string;

  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  licensePlate: string;

  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  vehicleColor: string;

  @AutoMap()
  @IsNotEmpty()
  @IsBoolean()
  insuranceValid: boolean;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(0, 500)
  specialInstructions?: string;

  @AutoMap()
  @IsNotEmpty()
  @IsBoolean()
  authorizedForPickup: boolean;
}
