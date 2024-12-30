import { HttpException, Injectable, Scope } from '@nestjs/common';
import { Role } from 'src/modules/administration/domain/rol/rol.entity';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';

/**
 * Represents a Role repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class RolRepository {
  /**
   * Creates a new instance of RoleRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all Roles from the database.
   * @param options - Optional criteria to filter the Roles.
   * @returns A promise that resolves to an array of Roles.
   * @throws HttpException if there's an error retrieving the Roles from the database.
   */
  async getAll(options?: GetAllCriteriaType<Role>): Promise<Role[]> {
    try {
      return await this._context.role.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new Role in the database.
   * @param Role - The Role object to create.
   * @returns A promise that resolves to the created Role.
   * @throws HttpException if there's an error creating the Role in the database.
   */
  async create(Role: Role): Promise<Role> {
    try {
      const RoleData = await this._context.role.create(Role);
      return {
        ...Role,
        ...RoleData?.raw[0],
        ...RoleData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Get a Role by the provided criteria in the database.
   * @param options - The criteria to find the Role.
   * @returns A promise that resolves to the found Role.
   * @throws HttpException if there's an error finding the Role in the database.
   */
  async getOne(options: GetOneCriteriaType<Role>): Promise<Role> {
    try {
      return await this._context.role.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a Role in the database.
   * @param criteria - The criteria to find the Role to update.
   * @param Role - The updated Role object.
   * @returns A promise that resolves to the updated Role.
   * @throws HttpException if there's an error updating the Role in the database.
   */
  async update(criteria: UpdateCriteriaType<Role>, Role: Role): Promise<Role> {
    try {
      const updateRole = await this._context.role.update(criteria, Role);
      return {
        ...Role,
        ...updateRole?.raw[0],
        ...updateRole?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a Role from the database.
   * @param criteria - The criteria to find the Role to delete.
   * @returns A promise that resolves to the deleted Role.
   * @throws HttpException if there's an error deleting the Role from the database.
   */
  async delete(criteria: DeleteCriteriaType<Role>): Promise<Role> {
    try {
      const deleteRole = await this._context.role.delete(criteria);
      return { ...deleteRole?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a Role in the database.
   * @param Role - The Role object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved Role.
   * @throws HttpException if there's an error saving the Role in the database.
   */
  async save(Role: Role, options?: SaveOptionsType<Role>): Promise<Role> {
    try {
      const RoleSaved = await this._context.role.save(Role, options);
      return RoleSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Method to get a Role by ID
   * @param id_rol - The ID of the Role.
   * @returns A promise that resolves to the Role or null if not found.
   */
  async getRoleById(id_rol: number): Promise<Role | null> {
    return this.getOne({ where: { id_rol } });
  }
}
