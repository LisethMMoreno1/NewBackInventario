/* istanbul ignore file */

import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { AbstractRepository } from 'src/modules/database/classes/abstractRepository';
import { GenericRepository } from 'src/modules/database/classes/genericRepository';

import { DataSource } from 'typeorm';

/**
 * The context for the administration module.
 */
@Injectable()
export class AdministrationContext {
  /**
   * Represents the repository for the 'User' entity.
   */
  user: AbstractRepository<User>;

  /**
   * Creates an instance of AdministrationContextService.
   * @param dataSource - The data source to be injected.
   * @param request - The request object to be injected.
   */
  constructor(
    @InjectDataSource('main') private readonly dataSource: DataSource,
    @Inject('REQUEST') private request: Request,
  ) {
    this.user = new GenericRepository<User>(
      User,
      this.dataSource,
      this.request,
    );
  }
}
