import { HttpException, Injectable, Scope } from '@nestjs/common';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { Department } from 'src/modules/maintenance/domain/department/department.entity';
import { MaintenanceContext } from '../context/maintenaceContext.service';

/**
 * Represents a Department repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class DepartmentRepository {
  /**
   * Creates a new instance of DepartmentRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: MaintenanceContext) {}

  /**
   * Retrieves all Departments from the database.
   * @param options - Optional criteria to filter the Departments.
   * @returns A promise that resolves to an array of Departments.
   * @throws HttpException if there's an error retrieving the Departments from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<Department>,
  ): Promise<Department[]> {
    try {
      return await this._context.department.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB al obtener departamentos: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new Department in the database.
   * @param department - The Department object to create.
   * @returns A promise that resolves to the created Department.
   * @throws HttpException if there's an error creating the Department in the database.
   */
  async create(department: Department): Promise<Department> {
    try {
      const departmentData = await this._context.department.create(department);
      return {
        ...department,
        ...departmentData?.raw[0],
        ...departmentData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB al crear el departamento: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a Department by the provided criteria in the database.
   * @param options - The criteria to find the Department.
   * @returns A promise that resolves to the found Department.
   * @throws HttpException if there's an error finding the Department in the database.
   */
  async getOne(options: GetOneCriteriaType<Department>): Promise<Department> {
    try {
      return await this._context.department.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB al obtener el departamento: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a Department in the database.
   * @param criteria - The criteria to find the Department to update.
   * @param department - The updated Department object.
   * @returns A promise that resolves to the updated Department.
   * @throws HttpException if there's an error updating the Department in the database.
   */
  async update(
    criteria: UpdateCriteriaType<Department>,
    department: Department,
  ): Promise<Department> {
    try {
      const updateDepartment = await this._context.department.update(
        criteria,
        department,
      );
      return {
        ...department,
        ...updateDepartment?.raw[0],
        ...updateDepartment?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB al actualizar el departamento: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a Department from the database.
   * @param criteria - The criteria to find the Department to delete.
   * @returns A promise that resolves to the deleted Department.
   * @throws HttpException if there's an error deleting the Department from the database.
   */
  async delete(criteria: DeleteCriteriaType<Department>): Promise<Department> {
    try {
      const deleteDepartment = await this._context.department.delete(criteria);
      return { ...deleteDepartment?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB al eliminar el departamento: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a Department in the database.
   * @param department - The Department object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved Department.
   * @throws HttpException if there's an error saving the Department in the database.
   */
  async save(
    department: Department,
    options?: SaveOptionsType<Department>,
  ): Promise<Department> {
    try {
      return await this._context.department.save(department, options);
    } catch (error) {
      throw new HttpException(
        `Error de DB al guardar el departamento: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
