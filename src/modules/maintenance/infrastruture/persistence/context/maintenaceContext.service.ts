/* istanbul ignore file */

import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { AbstractRepository } from 'src/modules/database/classes/abstractRepository';
import { GenericRepository } from 'src/modules/database/classes/genericRepository';
import { Bank } from 'src/modules/maintenance/domain/bank/bank.entity';
import { City } from 'src/modules/maintenance/domain/cities/cities.entity';
import { Department } from 'src/modules/maintenance/domain/department/department.entity';
import { TypeOfAddress } from 'src/modules/maintenance/domain/type-of-address/typeAddress.entity';
import { TypeOfCurrency } from 'src/modules/maintenance/domain/type-Of-currency/typeCurrency.entity';
import { TypeOfGender } from 'src/modules/maintenance/domain/type-of-gender/typeGender.entity';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';

import { DataSource } from 'typeorm';

/**
 * The context for the Maintenance module.
 */
@Injectable()
export class MaintenanceContext {
  /**
   * Represents the repository for the 'Bank' entity.
   */
  bank: AbstractRepository<Bank>;

  /**
   * Represents the repository for the 'typeOfIdentification' entity.
   */
  typeOfIdentification: AbstractRepository<TypeOfIdentification>;

  /**
   * Represents the repository for the 'typeOfGender' entity.
   */
  typeOfGender: AbstractRepository<TypeOfGender>;

  /**
   * Represents the repository for the 'typeOfGender' entity.
   */
  typeOfAddress: AbstractRepository<TypeOfAddress>;
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
   *   /**
   * Represents the repository for the 'TypeOfCurrency' entity.
   */
  typeOfCurrency: AbstractRepository<TypeOfCurrency>;
  /**
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
    this.bank = new GenericRepository<Bank>(
      Bank,
      this.dataSource,
      this.request,
    );

    this.typeOfIdentification = new GenericRepository<TypeOfIdentification>(
      TypeOfIdentification,
      this.dataSource,
      this.request,
    );

    this.typeOfGender = new GenericRepository<TypeOfGender>(
      TypeOfGender,
      this.dataSource,
      this.request,
    );

    this.typeOfAddress = new GenericRepository<TypeOfAddress>(
      TypeOfAddress,
      this.dataSource,
      this.request,
    );

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

    this.typeOfCurrency = new GenericRepository<TypeOfCurrency>(
      TypeOfCurrency,
      this.dataSource,
      this.request,
    );
  }
}
