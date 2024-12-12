/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './modules/database/database.module';
import { AdministrationModule } from './modules/administration/administration.module';

@Module({
  imports: [DatabaseModule, CommonModule, AdministrationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
