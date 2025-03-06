/* istanbul ignore file */
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { Module } from 'src/modules/administration/domain/module/module.entity';
import { Option } from 'src/modules/administration/domain/option/option.entity';
import { Order } from 'src/modules/administration/domain/order/order.entity';
import { Payment } from 'src/modules/administration/domain/payment/payment.entity';
import { Role } from 'src/modules/administration/domain/rol/rol.entity';
import { RoleModule } from 'src/modules/administration/domain/roleModule/roleModule.entity';
import { RoleOption } from 'src/modules/administration/domain/roleOption/roleOption.entity';
import { Submodule } from 'src/modules/administration/domain/subModule/subModule.entity';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { VehicleDeliveryRecord } from 'src/modules/administration/domain/vehicleDeliveryRecord/vehicleDeliveryRecord.entity';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { AbstractRepository } from 'src/modules/database/classes/abstractRepository';
import { GenericRepository } from 'src/modules/database/classes/genericRepository';
import { DataSource } from 'typeorm';

/**
 * The context for the administration module.
 */
@Injectable()
export class AdministrationContext {
  /**
   * Repository for the 'User' entity.
   */
  user: AbstractRepository<User>;

  /**
   * Repository for the 'Role' entity.
   */
  role: AbstractRepository<Role>;

  /**
   * Repository for the 'Payment' entity.
   */
  payment: AbstractRepository<Payment>;

  /**
   * Repository for the 'Customers' entity.
   */

  /**
   * Repository for the 'Option' entity.
   */
  option: AbstractRepository<Option>;

  /**
   * Repository for the 'Module' entity.
   */
  module: AbstractRepository<Module>;

  /**
   * Repository for the 'RoleModule' entity.
   */
  roleModule: AbstractRepository<RoleModule>;

  /**
   * Repository for the 'Submodule' entity.
   */
  submodule: AbstractRepository<Submodule>;

  /**
   * Repository for the 'RoleOption' entity.
   */
  roleOption: AbstractRepository<RoleOption>;

  /**
   * Repository for the 'Tool' entity.
   */
  tool: AbstractRepository<Tool>;

  /**
   * Repository for the 'Tool' entity.
   */
  vehicleDeliveryRecord: AbstractRepository<VehicleDeliveryRecord>;

  /**
   * Repository for the 'Tool' entity.
   */
  vehicleReceptionRecord: AbstractRepository<VehicleReceptionRecord>;

  /**
   * Repository for the 'Tool' entity.
   */
  order: AbstractRepository<Order>;
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
    this.tool = new GenericRepository<Tool>(
      Tool,
      this.dataSource,
      this.request,
    );
    this.order = new GenericRepository<Order>(
      Order,
      this.dataSource,
      this.request,
    );
    this.role = new GenericRepository<Role>(
      Role,
      this.dataSource,
      this.request,
    );

    this.payment = new GenericRepository<Payment>(
      Payment,
      this.dataSource,
      this.request,
    );

    this.option = new GenericRepository<Option>(
      Option,
      this.dataSource,
      this.request,
    );
    this.module = new GenericRepository<Module>(
      Module,
      this.dataSource,
      this.request,
    );
    this.roleModule = new GenericRepository<RoleModule>(
      RoleModule,
      this.dataSource,
      this.request,
    );
    this.submodule = new GenericRepository<Submodule>(
      Submodule,
      this.dataSource,
      this.request,
    );
    this.roleOption = new GenericRepository<RoleOption>(
      RoleOption,
      this.dataSource,
      this.request,
    );
    this.vehicleDeliveryRecord = new GenericRepository<VehicleDeliveryRecord>(
      VehicleDeliveryRecord,
      this.dataSource,
      this.request,
    );
    this.vehicleReceptionRecord = new GenericRepository<VehicleReceptionRecord>(
      VehicleReceptionRecord,
      this.dataSource,
      this.request,
    );
  }
}
