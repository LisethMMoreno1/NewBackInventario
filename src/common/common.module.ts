/* istanbul ignore file */
import { Global, Module } from '@nestjs/common';
import { HttpAdapter } from './adapters/httpAdapter.service';
import { HttpModule } from '@nestjs/axios';
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { JwtModule } from '@nestjs/jwt';

/**
 * A module representing the common module.
 */
@Module({
  imports: [
    HttpModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    JwtModule.register({
      secret: 'test-key',
      global: true,
      signOptions: {
        expiresIn: process.env.NODE_ENV === 'production' ? '30m' : '1d',
      },
    }),
  ],
  providers: [HttpAdapter],
  exports: [HttpAdapter],
})
@Global()
export class CommonModule {}
