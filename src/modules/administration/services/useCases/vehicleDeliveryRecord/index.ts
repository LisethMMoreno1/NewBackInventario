/* istanbul ignore file */
import { CreateVehicleDeliveryRecordService } from './createVehicleDeliveryRecord.service';
import { DeleteVehicleDeliveryRecordService } from './deleteVehicleDeliveryRecord.service';
import { GetAllVehicleDeliveryRecordService } from './getAllVehicleDeliveryRecord.service';
import { GetOneVehicleDeliveryRecordService } from './getOneVehicleDeliveryRecord.service';
import { UpdateVehicleDeliveryRecordService } from './updateVehicleDeliveryRecord.service';

/**
 * Array of user services.
 */
export const VehicleDeliveryRecordService = [
  CreateVehicleDeliveryRecordService,
  GetOneVehicleDeliveryRecordService,
  GetAllVehicleDeliveryRecordService,
  UpdateVehicleDeliveryRecordService,
  DeleteVehicleDeliveryRecordService,
];
