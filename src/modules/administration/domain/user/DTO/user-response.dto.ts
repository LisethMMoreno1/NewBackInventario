import { AutoMap } from '@automapper/classes';

export class UserResponseDto {
  @AutoMap()
  id_user: number;

  @AutoMap()
  identificationNumber: number;

  @AutoMap()
  name: string;

  @AutoMap()
  email: string;

  @AutoMap()
  password?: string;

  @AutoMap()
  typeOfGender: string;

  @AutoMap()
  typeOfIdentification: number;

  @AutoMap()
  state: boolean;

  @AutoMap()
  accessToken?: string;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;

  @AutoMap()
  role: string;

  @AutoMap()
  roleModule: string[];
}
