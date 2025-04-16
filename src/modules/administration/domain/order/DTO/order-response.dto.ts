import { AutoMap } from '@automapper/classes';
import { VehicleExitRecordResponseDto } from '../../vehicleExitRecord/DTO/vehicleExitRecord-response.dto';
import { VehicleOwnerResponseDto } from '../../vehicleOwner/DTO/vehicleOwner-response.dto';
import { VehicleReceptionRecordResponseDto } from '../../VehicleReceptionRecord/DTO/VehicleReceptionRecord-response.dto';

export class OrderResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  orderNumber: string;

  @AutoMap()
  status: string;

/*   @AutoMap()
  receptionRecordId: number; */

  @AutoMap()
  workDetails: string;

  @AutoMap()
  cost: number;

  @AutoMap(() => VehicleReceptionRecordResponseDto)
  receptionRecord: VehicleReceptionRecordResponseDto;

  @AutoMap(() => VehicleOwnerResponseDto)
  vehicleOwner: VehicleOwnerResponseDto;  // Ahora el DTO de VehicleOwner incluye las propiedades necesarias

  @AutoMap(() => VehicleExitRecordResponseDto)
  exitRecords: VehicleExitRecordResponseDto[];  //  // Propiedad actualizada para reflejar un arreglo

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}
