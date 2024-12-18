import { AutoMap } from '@automapper/classes';

export class TypeOfAddressResponseDto {
  @AutoMap()
  id_typeOfAddress: number;

  @AutoMap()
  name_typeOfAddress: string;

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
