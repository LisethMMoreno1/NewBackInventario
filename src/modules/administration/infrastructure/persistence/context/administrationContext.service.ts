/* istanbul ignore file */

import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { Role } from 'src/modules/administration/domain/rol/rol.entity';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { AbstractRepository } from 'src/modules/database/classes/abstractRepository';
import { GenericRepository } from 'src/modules/database/classes/genericRepository';
/* import { Payment } from 'src/modules/maintenance/domain/payments/payments.entity';
 */
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
   * Represents the repository for the 'Role' entity.
   */
  role: AbstractRepository<Role>;

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

    this.role = new GenericRepository<Role>(
      Role,
      this.dataSource,
      this.request,
    );
  }
}
