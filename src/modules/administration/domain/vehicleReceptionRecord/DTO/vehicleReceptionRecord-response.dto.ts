import { AutoMap } from '@automapper/classes';
import { VehicleOwner } from '../../vehicleOwner/vehicleOwner.entity';
import { OrderResponseDto } from '../../order/DTO/order-response.dto';

export class VehicleReceptionRecordResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  arrivalDate: Date;

  @AutoMap()
  arrivalCondition: string;

  @AutoMap()
  diagnosis: string;

  @AutoMap()
  diagnosisCost: number;

  @AutoMap()
  repairProposals: string;

  @AutoMap()
  invoiceDetails: string;

  @AutoMap()
  contractSigned: boolean;

  @AutoMap()
  advancePayment: number;

  @AutoMap()
  vehicleOwner: VehicleOwner;

  
  @AutoMap(() => OrderResponseDto)
  orders: OrderResponseDto[]; 

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}
