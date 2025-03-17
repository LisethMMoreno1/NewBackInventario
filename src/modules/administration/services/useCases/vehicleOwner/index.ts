import { CreateVehicleOwnerService } from './CreateVehicleOwner.service';
import { DeleteVehicleOwnerService } from './deleteVehicleOwner.service';
import { GetAllVehicleOwnerService } from './getAllVehicleOwner.service';
import { GetOneVehicleOwnerService } from './getOneVehicleOwner.service';
import { UpdateVehicleOwnerService } from './updateVehicleOwner.service';

/**
 * Array of module services.
 */
export const VehicleOwnerServices = [
  CreateVehicleOwnerService,
  DeleteVehicleOwnerService,
  GetAllVehicleOwnerService,
  GetOneVehicleOwnerService,
  UpdateVehicleOwnerService,
];
