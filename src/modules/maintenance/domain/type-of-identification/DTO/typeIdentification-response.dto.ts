import { AutoMap } from '@automapper/classes';

export class TypeOfIdentificationResponseDto {
  @AutoMap()
  id_typeIdentification: number;

  @AutoMap()
  name_typeIdentification: string;

  @AutoMap()
  code_typeIdentification: string;

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
