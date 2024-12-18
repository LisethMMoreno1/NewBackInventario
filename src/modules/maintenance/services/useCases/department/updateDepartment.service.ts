import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Department } from 'src/modules/maintenance/domain/department/department.entity';
import { DepartmentRequestDto } from 'src/modules/maintenance/domain/department/DTO/department-request.dto'; // Asegúrate de importar el DTO
import { DepartmentRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/department.repository';

@Injectable()
export class UpdateDepartmentService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _departmentRepository: DepartmentRepository,
  ) {}

  /**
   * Handles the update of a department by its ID.
   * @param id_department - The ID of the department to update.
   * @param departmentRequestDto - The data transfer object containing updated department information.
   * @returns The updated department.
   * @throws NotFoundException if no department is found with the given ID.
   */
  async handle(
    id_department: number,
    departmentRequestDto: DepartmentRequestDto, // Ahora el servicio recibe el DTO
  ): Promise<Department> {
    // Buscar el departamento por ID
    const department = await this._departmentRepository.getOne({
      where: { id_department },
    });

    // Si el departamento no existe, lanzar excepción
    if (!department) {
      throw new NotFoundException(
        `Department with ID ${id_department} not found`,
      );
    }

    // Mapear los datos del DTO al departamento encontrado
    const updatedDepartment = this._mapper.map(
      departmentRequestDto,
      DepartmentRequestDto,
      Department,
    );

    // Asignar el ID al departamento actualizado
    updatedDepartment.id_department = department.id_department;

    // Guardar el departamento actualizado
    await this._departmentRepository.save(updatedDepartment);

    return updatedDepartment;
  }
}
