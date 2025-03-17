/* istanbul ignore file */
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from 'src/config/envs';

/**
 * A module representing the database.
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'main',
      type: 'postgres',
      url: envs.DATABASE_URL,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: process.env.NODE_ENV === 'production' ? false : true,
    }),
  ],
  exports: [TypeOrmModule],
})
@Global()
export class DatabaseModule {}
