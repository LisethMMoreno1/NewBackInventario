import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Module } from 'src/modules/administration/domain/module/module.entity';
import { ModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/module.repository';

@Injectable()
export class UpdateModuleService {
  /**
   * Creates an instance of the DeleteModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _moduleRepository - The repository for managing Module entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _moduleRepository: ModuleRepository,
  ) {}

  /**
   * Update a module by ID.
   * @param id - The ID of the module to update.
   * @param data - The updated data for the module.
   * @returns The updated module.
   * @throws NotFoundException if the module is not found.
   */
  async handle(id: number, data: Partial<Module>): Promise<Module> {
    // Obtiene el módulo existente
    const module = await this._moduleRepository.getOne({
      where: { id_module: id },
    });

    // Lanza una excepción si no se encuentra el módulo
    if (!module) {
      throw new NotFoundException('Module not found');
    }

    // Fusiona los datos existentes con los nuevos
    const updatedModule = await this._moduleRepository.create({
      ...module,
      ...data,
    });

    // Guarda la entidad actualizada y espera el resultado
    return await this._moduleRepository.save(updatedModule);
  }
}
