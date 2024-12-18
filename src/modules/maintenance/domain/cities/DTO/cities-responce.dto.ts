import { AutoMap } from '@automapper/classes';

export class CityResponseDto {
  /**
   * ID de la ciudad.
   */
  @AutoMap()
  id_city: number;

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
   * Información del departamento asociado.
   */
  @AutoMap()
  department: {
    id_department: number;
    name_department: string;
    code_department: string;
  };

  /**
   * Estado de la ciudad (activo o inactivo).
   */
  @AutoMap()
  state: boolean;

  /**
   * Fecha de creación del registro.
   */
  @AutoMap()
  created_at: Date;

  /**
   * Fecha de la última actualización del registro.
   */
  @AutoMap()
  updated_at: Date;
}
