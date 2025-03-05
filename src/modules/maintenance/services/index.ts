/* istanbul ignore file */

import { CityProfile } from './profiles/cities/cities.profile';
import { DepartamentProfile } from './profiles/department/department.profile';
import { CityServices } from './useCases/cities';
import { DepartmentService } from './useCases/department';

/**
 * Array of Maintenance services.
 */
export const MaintenanceServices = [...DepartmentService, ...CityServices];

/**
 * Array of Maintenance profiles.
 */
export const MaintenanceProfiles = [DepartamentProfile, CityProfile];
