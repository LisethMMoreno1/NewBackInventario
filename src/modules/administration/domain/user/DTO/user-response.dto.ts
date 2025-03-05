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

  // Se espera el ID de la herramienta (obtenido de la relación) o su otro identificador.
  // Ahora se espera un objeto Tool o un DTO para Tool
  @AutoMap()
  tool: number;

  @AutoMap()
  code_tool: string;

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
