import { AutoMap } from '@automapper/classes';

export class OrderResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  orderNumber: string;

  @AutoMap()
  status: string;

  @AutoMap()
  receptionRecordId: number;

  @AutoMap()
  deliveryRecordId: number;

  @AutoMap()
  workDetails: string;

  @AutoMap()
  cost: number;

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}
