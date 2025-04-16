import { CreateVehicleExitRecordService } from "./createVehicleExitRecord.service";
import { DeleteVehicleExitRecordService } from "./deleteVehicleExitRecord.service";
import { GetAllVehicleExitRecordService } from "./getAllVehicleExitRecord.service";
import { GetOneVehicleExitRecordService } from "./getOneVehicleExitRecord.service";
import { UpdateVehicleExitRecordService } from "./updateVehicleExitRecord.service";

/**
 * Array of module services.
 */
export const VehicleExitRecordServices = [
    CreateVehicleExitRecordService,
    DeleteVehicleExitRecordService,
    GetAllVehicleExitRecordService,
    GetOneVehicleExitRecordService,
    UpdateVehicleExitRecordService,
];
