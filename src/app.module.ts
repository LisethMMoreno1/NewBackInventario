/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './modules/database/database.module';
import { AdministrationModule } from './modules/administration/administration.module';
import { MaintenanceModule } from './modules/maintenance/maintenance.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    CommonModule,
    AdministrationModule,
    MaintenanceModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
