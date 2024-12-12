/* istanbul ignore file */
import { UserProfile } from '../profiles/user/user.profile';
import { UserServices } from './user';

/**
 * Array of administration services.
 */
export const AdministrationServices = [...UserServices];

/**
 * Array of administration profiles.
 */
export const AdministrationProfiles = [UserProfile];
