/* istanbul ignore file */
import { RolProfile } from '../profiles/rol/rol.profile';
import { UserProfile } from '../profiles/user/user.profile';
import { RoleServices } from './rol';
import { UserServices } from './user';

/**
 * Array of administration services.
 */
export const AdministrationServices = [...UserServices, ...RoleServices];

/**
 * Array of administration profiles.
 */
export const AdministrationProfiles = [UserProfile, RolProfile];
