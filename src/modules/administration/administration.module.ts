/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { AdministrationPersistenceProvider } from './infrastructure';
import {
  AdministrationProfiles,
  AdministrationServices,
} from './services/useCases';
import { Controllers } from './presentation';

/**
 * A module representing the administration module.
 */
@Module({
  imports: [],
  controllers: [...Controllers],
  providers: [
    ...AdministrationPersistenceProvider,
    ...AdministrationServices,
    ...AdministrationProfiles,
  ],
})
export class AdministrationModule {}
