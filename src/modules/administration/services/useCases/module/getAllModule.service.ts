import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Module } from 'src/modules/administration/domain/module/module.entity';
import { ModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/module.repository';

@Injectable()
export class GetAllModuleService {
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
   * Retrieve all modules.
   * @returns An array of all modules.
   */
  async handle(): Promise<Module[]> {
    return this._moduleRepository.getAll({
      relations: ['roleModules', 'submodules'],
    });
  }
}
