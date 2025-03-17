/* istanbul ignore file */
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { Order } from 'src/modules/administration/domain/order/order.entity';
import { Payment } from 'src/modules/administration/domain/payment/payment.entity';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { VehicleDeliveryRecord } from 'src/modules/administration/domain/vehicleDeliveryRecord/vehicleDeliveryRecord.entity';
import { VehicleOwner } from 'src/modules/administration/domain/vehicleOwner/vehicleOwner.entity';
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
   * Repository for the 'Payment' entity.
   */
  payment: AbstractRepository<Payment>;

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
   * Repository for the 'order' entity.
   */
  order: AbstractRepository<Order>;

  /**
   * Repository for the 'VehicleOwner' entity.
   */
  vehicleOwner: AbstractRepository<VehicleOwner>;

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
    this.vehicleOwner = new GenericRepository<VehicleOwner>(
      VehicleOwner,
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

    this.payment = new GenericRepository<Payment>(
      Payment,
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
