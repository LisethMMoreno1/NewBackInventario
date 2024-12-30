import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleModule } from 'src/modules/administration/domain/roleModule/roleModule.entity';
import { ModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/module.repository';
import { RolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/rol.repository';
import { RoleModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/roleModule.repository';
import { SubmoduleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/subModule.repository';
import { RoleModuleResponseDto } from 'src/modules/administration/domain/roleModule/DTO/roleModule-response.dto';

@Injectable()
export class CreateRoleModuleService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _rolRepository: RolRepository,
    private readonly _moduleRepository: ModuleRepository,
    private readonly _submoduleRepository: SubmoduleRepository,
    private readonly _roleModuleRepository: RoleModuleRepository,
  ) {}

  async handle(
    roleId: number,
    moduleId: number,
    submoduleId?: number,
  ): Promise<RoleModuleResponseDto> {
    const role = await this._rolRepository.getOne({
      where: { id_rol: roleId },
    });
    if (!role) {
      throw new NotFoundException('Role not found');
    }

    const module = await this._moduleRepository.getOne({
      where: { id_module: moduleId },
    });
    if (!module) {
      throw new NotFoundException('Module not found');
    }

    let submodule = null;
    if (submoduleId) {
      submodule = await this._submoduleRepository.getOne({
        where: { id_subModule: submoduleId },
      });
    }

    const roleModule = new RoleModule();
    roleModule.role = role;
    roleModule.module = module;
    roleModule.submodule = submodule || null;

    await this._roleModuleRepository.save(roleModule);

    const roleModuleResponse = this._mapper.map(
      roleModule,
      RoleModule,
      RoleModuleResponseDto,
    );

    return roleModuleResponse;
  }
}
