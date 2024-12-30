import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/module.repository';
import { Module } from 'src/modules/administration/domain/Module/Module.entity'; // Asegúrate de importar la entidad Module

@Injectable()
export class DeleteModuleService {
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
   * Handle the deletion of a module.
   * @param id - The ID of the module to be deleted.
   * @throws NotFoundException if the module is not found.
   */
  async handle(id: number): Promise<Module> {
    // Cambia la promesa a Module en lugar de void
    const module = await this._moduleRepository.getOne({
      where: { id_module: id },
    });
    if (!module) {
      throw new NotFoundException('Module not found');
    }
    // Elimina el módulo y luego lo devuelve
    await this._moduleRepository.delete(module);
    return module; // Devuelve el módulo eliminado
  }
}
