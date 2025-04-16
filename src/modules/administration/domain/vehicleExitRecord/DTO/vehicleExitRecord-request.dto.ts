import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class VehicleExitRecordRequestDto {
    @IsNumber()
    @IsNotEmpty()
    @AutoMap()
    identificationNumber_vehicleOwner: number;

    @IsString()
    @IsNotEmpty()
    @AutoMap()
    orderNumber_order: string;

    @IsString()
    @IsNotEmpty()
    @AutoMap()
    licensePlate: string;

    @IsDateString()
    @IsNotEmpty()
    @AutoMap()
    exitDateTime: Date;

    @IsString()
    @AutoMap()
    exitDescription?: string;

    @IsString()
    @AutoMap()
    ownerSignature?: string;
}
