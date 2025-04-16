import { AutoMap } from '@automapper/classes';
import { VehicleOwnerResponseDto } from '../../vehicleOwner/DTO/vehicleOwner-response.dto';
import { OrderResponseDto } from '../../order/DTO/order-response.dto';

export class VehicleExitRecordResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  vehicleOwner: VehicleOwnerResponseDto;

  @AutoMap()
  order: OrderResponseDto;

  @AutoMap()
  licensePlate: string;

  @AutoMap()
  exitDateTime: Date;

  @AutoMap()
  exitDescription?: string;

  @AutoMap()
  ownerSignature?: string;

}
