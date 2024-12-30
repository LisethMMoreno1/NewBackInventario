import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleOptionRequestDto } from 'src/modules/administration/domain/roleOption/DTO/roleOption-request.dto';
import { RoleOptionResponseDto } from 'src/modules/administration/domain/roleOption/DTO/roleOption-response.dto';
import { RoleOption } from 'src/modules/administration/domain/roleOption/roleOption.entity';
import { RoleOptionRepository } from 'src/modules/administration/infrastructure/persistence/repositories/roleOption.repository';

@Injectable()
export class UpdateRoleOptionService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _roleOptionRepository: RoleOptionRepository,
  ) {}

  async handle(
    id_roleOption: number,
    dto: RoleOptionRequestDto,
  ): Promise<RoleOptionResponseDto> {
    const roleOption = await this._roleOptionRepository.getOne({
      where: { id_roleOption },
    });
    if (!roleOption) {
      throw new NotFoundException('RoleOption not found');
    }

    roleOption.state = dto.state;

    const updatedRoleOption = await this._roleOptionRepository.save(roleOption);
    return this._mapper.map(
      updatedRoleOption,
      RoleOption,
      RoleOptionResponseDto,
    );
  }
}
