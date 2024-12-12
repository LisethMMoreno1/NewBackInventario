/* istanbul ignore file */
import { AdministrationContext } from './persistence/context/administrationContext.service';
import { UserRepository } from './persistence/repositories/user.repository';
/**
 * An array of persistence providers for the administration module.
 */
export const AdministrationPersistenceProvider = [
  AdministrationContext,
  UserRepository,
];
