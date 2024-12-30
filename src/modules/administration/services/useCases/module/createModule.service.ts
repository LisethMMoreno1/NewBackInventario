import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { ModuleRequestDto } from 'src/modules/administration/domain/module/DTO/module-request.dto';
import { Module } from 'src/modules/administration/domain/module/module.entity';
import { ModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/module.repository';

@Injectable()
export class CreateModuleService {
  /**
   * Creates an instance of the CreateModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _moduleRepository - The repository for managing Module entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _moduleRepository: ModuleRepository,
  ) {}

  /**
   * Handles the creation of a new module.
   * @param moduleRequestDto - The data transfer object for creating a module.
   * @returns The created module.
   */
  async handle(moduleRequestDto: ModuleRequestDto): Promise<Module> {
    const module = this._mapper.map(moduleRequestDto, ModuleRequestDto, Module);
    return await this._moduleRepository.save(module);
  }
}
