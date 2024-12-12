import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { ConflictException, Injectable } from '@nestjs/common';
import { UserRequestDto } from 'src/modules/administration/domain/user/DTO/user-request.dto';
import { UserResponseDto } from 'src/modules/administration/domain/user/DTO/user-response.dto';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { UserRepository } from 'src/modules/administration/infrastructure/persistence/repositories/user.repository';

/**
 * Service class for creating a new user.
 */
@Injectable()
export class CreateUserService {
  /**
   * Creates an instance of the CreateUserService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRepository - The repository for managing User entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  /**
   * Handle the creation of a new user
   * Creates a new user.
   * @param user - The user to be created.
   * @returns The created user.
   */
  async handle(userRequest: UserRequestDto): Promise<UserResponseDto> {
    const userMap = this._mapper.map(userRequest, UserRequestDto, User);

    if (isNaN(Number(userMap?.identificationNumber)))
      throw new ConflictException(
        'El numero de identificación debe contener solo números.',
      );

    const existUser = await this._userRepository.getOne({
      where: [
        {
          identificationNumber: userMap?.identificationNumber,
        },
        {
          email: userMap?.email?.toLocaleUpperCase(),
        },
      ],
    });

    if (existUser?.id_user)
      throw new ConflictException(
        'Ya existe un usuario con el numero de identificaron o cédula ingresado.',
      );

    const user = await this._userRepository.create(userMap);

    const response = this._mapper.map(user, User, UserResponseDto);

    return response;
  }
}
