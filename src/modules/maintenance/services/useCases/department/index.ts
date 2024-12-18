/* istanbul ignore file */

import { CreateDepartmentService } from './createDepartment.service';
import { DeleteDepartmentService } from './deleteDepartment.service';
import { GetAllDepartmentService } from './getAllDepartment.service';
import { GetOneDepartmentService } from './getOneDepartment.service';
import { UpdateDepartmentService } from './updateDepartment.service';

/**
 * Array of DepartmentService services.
 */
export const DepartmentService = [
  CreateDepartmentService,
  GetAllDepartmentService,
  GetOneDepartmentService,
  UpdateDepartmentService,
  DeleteDepartmentService,
];
