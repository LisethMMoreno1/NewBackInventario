import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DepartmentRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/department.repository';

/**
 * Service class for deleting a TypeOfGender.
 */
@Injectable()
export class DeleteDepartmentService {
  /**
   * Constructor for DeleteTypeOfGenderService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _departmentRepository - The repository for managing TypeOfGender entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _departmentRepository: DepartmentRepository,
  ) {}

  /**
   * Deletes a gender type by its ID.
   * @param id_department - The ID of the gender type to delete.
   * @throws NotFoundException if the gender type is not found.
   */
  async delete(id_department: number): Promise<void> {
    const existingDepartment = await this._departmentRepository.getOne({
      where: { id_department },
    });

    if (!existingDepartment) {
      throw new NotFoundException('El Departamento no fue encontrado.');
    }

    await this._departmentRepository.delete(id_department);
  }
}
