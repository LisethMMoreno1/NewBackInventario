import { AutoMap } from '@automapper/classes';

export class LoginResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  identificationNumber: number;

  @AutoMap()
  accessToken: string;

  @AutoMap()
  expiresIn: number;
}
