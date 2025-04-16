import { AutoMap } from '@automapper/classes';
import { VehicleReceptionRecordResponseDto } from '../../VehicleReceptionRecord/DTO/VehicleReceptionRecord-response.dto';
import { Order } from '../../order/order.entity';
import { VehicleExitRecordResponseDto } from '../../vehicleExitRecord/DTO/vehicleExitRecord-response.dto';

export class VehicleOwnerResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  fullName: string;

  @AutoMap()
  identificationNumber: number;

  @AutoMap()
  phoneNumber: string;

  @AutoMap()
  email?: string;

  @AutoMap()
  address?: string;

  @AutoMap()
  vehicleBrand: string;

  @AutoMap()
  vehicleModel: string;

  @AutoMap()
  licensePlate: string;

  @AutoMap()
  vehicleColor: string;

  @AutoMap()
  insuranceValid: boolean;

  @AutoMap()
  specialInstructions?: string;

  @AutoMap()
  authorizedForPickup: boolean;


  @AutoMap(() => [Order])
  orders: Order[];

  @AutoMap(() => [VehicleReceptionRecordResponseDto])
  receptionRecords: VehicleReceptionRecordResponseDto[];

  @AutoMap(() => VehicleExitRecordResponseDto)
  exitRecords: VehicleExitRecordResponseDto[];  // Relación de salida de vehículos
}
