
import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsString } from 'class-validator';

export class VehicleOwnerIResponseDto {
  @AutoMap()
  @IsNotEmpty()
  identificationNumber: number;
}
