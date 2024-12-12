import { AutoMap } from '@automapper/classes';

/**
 * A class representing a user response dto.
 */
export class UserResponseDto {
  /**
   * User response id_user
   */
  @AutoMap()
  id_user: number;

  /**
   * User response name
   */
  @AutoMap()
  name: string;

  /**
   * User response identificationNumber
   */
  @AutoMap()
  identificationNumber: string;

  /**
   * User response email
   */
  @AutoMap()
  email: string;

  /**
   * User response password
   */
  @AutoMap()
  password: string;

  /**
   * User response state
   */
  @AutoMap()
  state: boolean;

  /**
   * User response created_at
   */
  @AutoMap()
  created_at: Date;

  /**
   * User response updated_at
   */
  @AutoMap()
  updated_at: Date;
}
