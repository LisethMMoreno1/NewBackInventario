import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class VehicleDeliveryRecordRequestDto {
  @IsNotEmpty()
  @IsDateString()
  @AutoMap()
  deliveryDate: Date;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  completedRepairs: string;

  @IsNotEmpty()
  @IsBoolean()
  @AutoMap()
  customerSatisfaction: boolean;
}
