import { AutoMap } from '@automapper/classes';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';
import { Order } from '../../orders/orders.entity';
import { Payment } from '../../payment/payment.entity';

export class CustomerResponseDto {
  @AutoMap()
  id_customers: number;

  @AutoMap()
  identificationNumber: string;

  @AutoMap()
  name_custumers: string;

  @AutoMap()
  phone_customers: string;

  @AutoMap()
  email_custumers: string;

  @AutoMap()
  address_custumers: string;

  @AutoMap()
  typeOfIdentification: TypeOfIdentification;

  @AutoMap()
  orders: Order[];

  @AutoMap()
  payments: Payment[];

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
