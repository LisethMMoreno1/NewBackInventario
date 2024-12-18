import { AutoMap } from '@automapper/classes';

export class TypeOfGenderResponseDto {
  @AutoMap()
  id_typeOfGender: number;

  @AutoMap()
  name_typeOfGender: string;

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
