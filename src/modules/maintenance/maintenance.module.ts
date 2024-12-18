/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { MaintenancePersistenceProvider } from './infrastruture';
import { MaintenanceProfiles, MaintenanceServices } from './services';
import { Controllers } from './presentation';

/**
 * A module representing the Maintenance module.
 */
@Module({
  imports: [],
  controllers: [...Controllers],
  providers: [
    ...MaintenancePersistenceProvider,
    ...MaintenanceServices,
    ...MaintenanceProfiles,
  ],
})
export class MaintenanceModule {}
