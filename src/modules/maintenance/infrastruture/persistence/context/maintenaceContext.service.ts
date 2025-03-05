/* istanbul ignore file */

import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { AbstractRepository } from 'src/modules/database/classes/abstractRepository';
import { GenericRepository } from 'src/modules/database/classes/genericRepository';
import { City } from 'src/modules/maintenance/domain/cities/cities.entity';
import { Department } from 'src/modules/maintenance/domain/department/department.entity';

import { DataSource } from 'typeorm';

/**
 * The context for the Maintenance module.
 */
@Injectable()
export class MaintenanceContext {
  /**
   *
   *   /**
   * Represents the repository for the 'Department' entity.
   */
  department: AbstractRepository<Department>;
  /**
   *
   *   /**
   * Represents the repository for the 'City' entity.
   */
  city: AbstractRepository<City>;
  /**
   *

   *
   *
   * Creates an instance of MaintenanceContextService.
   * @param dataSource - The data source to be injected.
   * @param request - The request object to be injected.
   */
  constructor(
    @InjectDataSource('main') private readonly dataSource: DataSource,
    @Inject('REQUEST') private request: Request,
  ) {
    this.department = new GenericRepository<Department>(
      Department,
      this.dataSource,
      this.request,
    );

    this.city = new GenericRepository<City>(
      City,
      this.dataSource,
      this.request,
    );
  }
}
