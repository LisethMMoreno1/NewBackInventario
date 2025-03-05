import { AutoMap } from '@automapper/classes';

export class VehicleReceptionRecordResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  arrivalDate: Date;

  @AutoMap()
  arrivalCondition: string;

  @AutoMap()
  diagnosis?: string;

  @AutoMap()
  diagnosisCost?: number;

  @AutoMap()
  repairProposals?: string;

  @AutoMap()
  invoiceDetails?: string;

  @AutoMap()
  contractSigned: boolean;

  @AutoMap()
  advancePayment?: number;

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}
