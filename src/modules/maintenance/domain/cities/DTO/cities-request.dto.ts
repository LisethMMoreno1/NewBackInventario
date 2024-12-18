import { AutoMap } from '@automapper/classes';

export class CityRequestDto {
  /**
   * Nombre de la ciudad.
   */
  @AutoMap()
  name_city: string;

  /**
   * Código único de la ciudad.
   */
  @AutoMap()
  code_city: number;

  /**
   * ID del departamento asociado a la ciudad.
   */
  @AutoMap()
  id_department: number;

  /**
   * Estado de la ciudad (activo o inactivo).
   */
  @AutoMap()
  state: boolean;
}
