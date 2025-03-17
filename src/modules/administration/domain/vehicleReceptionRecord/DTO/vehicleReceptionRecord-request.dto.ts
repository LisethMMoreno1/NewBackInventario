import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsInt,
} from 'class-validator';

export class VehicleReceptionRecordRequestDto {
  @IsNotEmpty()
  @IsDateString()
  @AutoMap()
  arrivalDate: string;

  @AutoMap()
  @IsString()
  arrivalCondition: string;

  @AutoMap()
  @IsString()
  diagnosis: string;

  @AutoMap()
  @IsNumber()
  diagnosisCost: number;

  @AutoMap()
  @IsString()
  repairProposals: string;

  @AutoMap()
  @IsString()
  invoiceDetails: string;

  @AutoMap()
  @IsBoolean()
  contractSigned: boolean;

  @AutoMap()
  @IsNumber()
  advancePayment: number;

  @IsInt()
  @IsNotEmpty()
  @AutoMap()
  vehicleOwnerId: number;
}
