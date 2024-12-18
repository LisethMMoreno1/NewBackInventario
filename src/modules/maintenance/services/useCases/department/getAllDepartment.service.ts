import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Department } from 'src/modules/maintenance/domain/department/department.entity';
import { DepartmentResponseDto } from 'src/modules/maintenance/domain/department/DTO/department-response.dto'; // Añadir el DTO de respuesta
import { DepartmentRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/department.repository';

/**
 * Service class for retrieving all departments.
 */
@Injectable()
export class GetAllDepartmentService {
  /**
   * Constructor for GetAllDepartmentService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _departmentRepository - The repository for managing Department entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _departmentRepository: DepartmentRepository,
  ) {}

  /**
   * Retrieves all departments.
   * @returns An array of DepartmentResponseDto.
   */
  async handle(): Promise<DepartmentResponseDto[]> {
    try {
      // Retrieve all departments
      const departments = await this._departmentRepository.getAll();

      // Map each department entity to a response DTO
      return departments.map((department) =>
        this._mapper.map(department, Department, DepartmentResponseDto),
      );
    } catch (error) {
      console.error('Error al obtener todos los departamentos:', error);
      throw new Error('Error al obtener todos los departamentos');
    }
  }
}
