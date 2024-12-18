import { AutoMap } from '@automapper/classes';

export class DepartmentResponseDto {
  /**
   * ID del departamento.
   */
  @AutoMap()
  id_department: number;

  /**
   * Nombre del departamento.
   */
  @AutoMap()
  name_department: string;

  /**
   * Código único del departamento.
   */
  @AutoMap()
  code_department: string;

  /**
   * Lista de ciudades asociadas al departamento.
   */
  @AutoMap()
  cities: {
    id_city: number;
    name_city: string;
    code_city: number;
  }[];

  /**
   * Estado del departamento (activo o inactivo).
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
