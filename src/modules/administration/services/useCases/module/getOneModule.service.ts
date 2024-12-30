import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Module } from 'src/modules/administration/domain/module/module.entity';
import { ModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/module.repository';

@Injectable()
export class GetOneModuleService {
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
   * Retrieve a module by ID.
   * @param id - The ID of the module to retrieve.
   * @returns The retrieved module.
   * @throws NotFoundException if the module is not found.
   */
  async handle(id: number): Promise<Module> {
    const module = await this._moduleRepository.getOne({
      where: { id_module: id },
      relations: ['roleModules', 'submodules'],
    });
    if (!module) {
      throw new NotFoundException('Module not found');
    }
    return module;
  }
}
