import { AutoMap } from '@automapper/classes';

export class VehicleDeliveryRecordResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  deliveryDate: Date;

  @AutoMap()
  completedRepairs: string;

  @AutoMap()
  customerSatisfaction: boolean;

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}
