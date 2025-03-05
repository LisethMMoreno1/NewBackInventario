import { AutoMap } from '@automapper/classes';
import { Tool } from '../../tool/tool.entity';

export class PaymentResponseDto {
  @AutoMap()
  id_payment: number;

  @AutoMap()
  sub_total: number;

  @AutoMap()
  taxes: number;

  @AutoMap()
  shipping: number;

  @AutoMap()
  total: number;

  @AutoMap()
  dateOfPayment: Date;

  @AutoMap()
  order_number: string;

  @AutoMap()
  tool: Tool;

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
