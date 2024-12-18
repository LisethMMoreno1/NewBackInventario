import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Department } from 'src/modules/maintenance/domain/department/department.entity';
import { DepartmentRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/department.repository';

@Injectable()
export class GetOneDepartmentService {
  /**
   * Creates an instance of the GetOneDepartmentService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _departmentRepository - The repository for managing bank entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _departmentRepository: DepartmentRepository,
  ) {}

  /**
   * Handles the retrieval of a department by its ID.
   * @param id_department - The ID of the department to retrieve.
   * @returns The department with the specified ID.
   * @throws NotFoundException if no department is found with the given ID.
   */
  async handle(id_department: number): Promise<Department> {
    try {
      const department = await this._departmentRepository.getOne({
        where: { id_department },
      });
      if (!department) {
        throw new NotFoundException(
          `Department with ID ${id_department} not found`,
        );
      }
      return department;
    } catch (error) {
      console.error('Error al obtener el departamento:', error);
      throw new Error('Error al obtener el departamento');
    }
  }
}
