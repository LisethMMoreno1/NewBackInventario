/* istanbul ignore file */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { Observable, catchError, concatMap, finalize } from 'rxjs';
import { DataSource } from 'typeorm';

/**
 * A key representing the entity manager.
 */
export const ENTITY_MANAGER_KEY = 'ENTITY_MANAGER';

/**
 * An interceptor that wraps the route handler in a transaction.
 */
@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  /**
   * Constructor
   * @param dataSource - The data source.
   */
  constructor(
    @InjectDataSource('main') private readonly dataSource: DataSource,
  ) {}

  /**
   * Method to intercept the request and wrap the route handler in a transaction.
   * @param context - The execution context.
   * @param next - The call handler.
   * @returns An observable.
   */
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    // get request object
    const req = context.switchToHttp().getRequest<Request>();
    // start transaction
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    // attach query manager with transaction to the request
    req[ENTITY_MANAGER_KEY] = queryRunner.manager;

    return next.handle().pipe(
      // concatMap gets called when route handler completes successfully
      concatMap(async (data) => {
        await queryRunner.commitTransaction();
        return data;
      }),
      // catchError gets called when route handler throws an exception
      catchError(async (e) => {
        await queryRunner.rollbackTransaction();
        throw e;
      }),
      // always executed, even if catchError method throws an exception
      finalize(async () => {
        await queryRunner.release();
      }),
    );
  }
}
