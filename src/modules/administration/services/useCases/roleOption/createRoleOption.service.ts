import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleOptionRequestDto } from 'src/modules/administration/domain/roleOption/DTO/roleOption-request.dto';
import { RoleOptionResponseDto } from 'src/modules/administration/domain/roleOption/DTO/roleOption-response.dto';
import { RoleOption } from 'src/modules/administration/domain/roleOption/roleOption.entity';
import { OptionRepository } from 'src/modules/administration/infrastructure/persistence/repositories/option.repository';
import { RoleModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/roleModule.repository';
import { RoleOptionRepository } from 'src/modules/administration/infrastructure/persistence/repositories/roleOption.repository';

@Injectable()
export class CreateRoleOptionService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _roleModuleRepository: RoleModuleRepository,
    private readonly _optionRepository: OptionRepository,
    private readonly _roleOptionRepository: RoleOptionRepository,
  ) {}

  async handle(
    roleOptionRequest: RoleOptionRequestDto,
  ): Promise<RoleOptionResponseDto> {
    const roleModule = await this._roleModuleRepository.getOne({
      where: { id_roleModule: roleOptionRequest.role_id },
      relations: ['roleOptions'],
    });

    if (!roleModule) {
      throw new NotFoundException('Role module not found');
    }

    const option = await this._optionRepository.getOne({
      where: { id_option: roleOptionRequest.option_id },
    });

    if (!option) {
      throw new NotFoundException('Option not found');
    }

    const roleOption = new RoleOption();
    roleOption.option = option;
    roleOption.state = roleOptionRequest.state;
    roleOption.role = roleModule.role;
    roleOption.role_id = roleOptionRequest.role_id;

    const savedRoleOption = await this._roleOptionRepository.save(roleOption);

    return this._mapper.map(savedRoleOption, RoleOption, RoleOptionResponseDto);
  }
}
