import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBoolean,
  IsNumber,
} from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class VehicleReceptionRecordRequestDto {
  @IsNotEmpty()
  @IsDateString()
  @AutoMap()
  arrivalDate: string; // ISO date string

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  arrivalCondition: string;

  @IsOptional()
  @IsString()
  @AutoMap()
  diagnosis?: string;

  @IsOptional()
  @IsNumber()
  @AutoMap()
  diagnosisCost?: number;

  @IsOptional()
  @IsString()
  @AutoMap()
  repairProposals?: string;

  @IsOptional()
  @IsString()
  @AutoMap()
  invoiceDetails?: string;

  @IsOptional()
  @IsBoolean()
  @AutoMap()
  contractSigned?: boolean;

  @IsOptional()
  @IsNumber()
  @AutoMap()
  advancePayment?: number;
}
