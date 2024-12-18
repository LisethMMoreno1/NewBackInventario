import { AutoMap } from '@automapper/classes';

export class DepartmentRequestDto {
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
   * Estado del departamento (activo o inactivo).
   */
  @AutoMap()
  state: boolean;
}
