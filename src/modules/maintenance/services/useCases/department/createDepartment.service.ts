import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { ConflictException, Injectable } from '@nestjs/common';
import { Department } from 'src/modules/maintenance/domain/department/department.entity';
import { DepartmentRequestDto } from 'src/modules/maintenance/domain/department/DTO/department-request.dto';
import { DepartmentResponseDto } from 'src/modules/maintenance/domain/department/DTO/department-response.dto'; // Añadir el DTO de respuesta
import { DepartmentRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/department.repository';

@Injectable()
export class CreateDepartmentService {
  /**
   * Constructor for CreateDepartmentService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _departmentRepository - The repository for managing department entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _departmentRepository: DepartmentRepository,
  ) {}

  /**
   * Handles the creation of a new department.
   * @param departmentRequest - The department data transfer object.
   * @returns The created department.
   */
  async handle(
    departmentRequest: DepartmentRequestDto,
  ): Promise<DepartmentResponseDto> {
    try {
      // Map the DepartmentRequestDto to a Department entity
      const departmentMapp = this._mapper.map(
        departmentRequest,
        DepartmentRequestDto,
        Department,
      );

      // Check if the department already exists (e.g., based on the department name)
      const existingDepartment = await this._departmentRepository.getOne({
        where: {
          id_department: departmentMapp.id_department,
        },
      });

      if (existingDepartment) {
        throw new ConflictException('Ya existe un departamento con ese nombre');
      }

      // Create and save the new department using the repository
      const createdDepartment =
        await this._departmentRepository.create(departmentMapp);
      await this._departmentRepository.save(createdDepartment);

      // Map the created department to a response DTO
      return this._mapper.map(
        createdDepartment,
        Department,
        DepartmentResponseDto,
      );
    } catch (error) {
      console.error('Error al crear el departamento:', error);
      throw new Error('Error al crear el departamento');
    }
  }
}
