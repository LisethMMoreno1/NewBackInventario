/* istanbul ignore file */
import { CreateVehicleReceptionRecordService } from './createVehicleReceptionRecord.service';
import { DeleteVehicleReceptionRecordService } from './deleteVehicleReceptionRecord.service';
import { GetAllVehicleReceptionRecordService } from './getAllVehicleReceptionRecord.service';
import { GetOneVehicleReceptionRecordService } from './getOneVehicleReceptionRecord.service';
import { UpdateVehicleReceptionRecordService } from './updateVehicleReceptionRecord.service';

/**
 * Array of user services.
 */
export const VehicleReceptionRecordService = [
  CreateVehicleReceptionRecordService,
  GetOneVehicleReceptionRecordService,
  GetAllVehicleReceptionRecordService,
  UpdateVehicleReceptionRecordService,
  DeleteVehicleReceptionRecordService,
];
