import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from 'src/modules/administration/infrastructure/persistence/repositories/user.repository';

@Injectable()
export class DeleteUserService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  async handle(identificationNumber: number, state: number): Promise<boolean> {
    const user = await this._userRepository.getOne({
      where: { identificationNumber },
    });
    if (!user) {
      throw new NotFoundException(
        `Usuario con ID ${identificationNumber} no encontrado`,
      );
    }

    if (state !== 0 && state !== 1) {
      throw new BadRequestException(
        'Valor de estado no válido, debe ser 0 o 1',
      );
    }

    user.state = state === 1;
    await this._userRepository.save(user);

    return true;
  }
}
