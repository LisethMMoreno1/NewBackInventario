/* istanbul ignore file */
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { Module } from 'src/modules/administration/domain/module/module.entity';
import { Option } from 'src/modules/administration/domain/option/option.entity';
import { OrderDetails } from 'src/modules/administration/domain/orderDetails/orderDetails.entity';
import { Order } from 'src/modules/administration/domain/orders/orders.entity';
import { OrderStatus } from 'src/modules/administration/domain/orderStatus/orderStatus.entity';
import { Payment } from 'src/modules/administration/domain/payment/payment.entity';
import { Role } from 'src/modules/administration/domain/rol/rol.entity';
import { RoleModule } from 'src/modules/administration/domain/roleModule/roleModule.entity';
import { RoleOption } from 'src/modules/administration/domain/roleOption/roleOption.entity';
import { Submodule } from 'src/modules/administration/domain/subModule/subModule.entity';
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
   * Repository for the 'User' entity.
   */
  user: AbstractRepository<User>;

  /**
   * Repository for the 'Role' entity.
   */
  role: AbstractRepository<Role>;

  /**
   * Repository for the 'Order' entity.
   */
  order: AbstractRepository<Order>;

  /**
   * Repository for the 'OrderDetails' entity.
   */
  orderDetails: AbstractRepository<OrderDetails>;

  /**
   * Repository for the 'Payment' entity.
   */
  payment: AbstractRepository<Payment>;

  /**
   * Repository for the 'OrderStatus' entity.
   */
  orderStatus: AbstractRepository<OrderStatus>;

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
    this.order = new GenericRepository<Order>(
      Order,
      this.dataSource,
      this.request,
    );
    this.orderDetails = new GenericRepository<OrderDetails>(
      OrderDetails,
      this.dataSource,
      this.request,
    );
    this.payment = new GenericRepository<Payment>(
      Payment,
      this.dataSource,
      this.request,
    );
    this.orderStatus = new GenericRepository<OrderStatus>(
      OrderStatus,
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
  }
}
