import { AutoMap } from '@automapper/classes';

/**
 * DTO for returning Role data.
 */
export class RoleResponseDto {
  @AutoMap()
  id_rol: number; // Role ID

  @AutoMap()
  name_rol: string; // Role name

  @AutoMap()
  description: string; // Role description

  @AutoMap()
  state: boolean; // Active or inactive state

  @AutoMap()
  created_at: Date; // Role creation timestamp

  @AutoMap()
  updated_at: Date; // Role last update timestamp
}
