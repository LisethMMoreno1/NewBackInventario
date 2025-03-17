import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import * as bcrypt from 'bcryptjs';
import { UserRequestDto } from 'src/modules/administration/domain/user/DTO/user-request.dto';
import { UserResponseDto } from 'src/modules/administration/domain/user/DTO/user-response.dto';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { ToolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/tool.repository';
import { UserRepository } from 'src/modules/administration/infrastructure/persistence/repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
    private readonly _toolRepository: ToolRepository,
  ) {}

  async handle(userRequest: UserRequestDto): Promise<UserResponseDto> {
    try {
      if (!userRequest.code_tool) {
        throw new BadRequestException('Tool code is required');
      }

      console.log('Fetching tool...');
      const tool = await this._toolRepository.getOne({
        where: { code: userRequest.code_tool },
      });
      if (!tool) {
        throw new NotFoundException(
          `Tool with code ${userRequest.code_tool} not found`,
        );
      }

      console.log('Checking for existing user...');
      const existingUser = await this._userRepository.getByIdentificationNumber(
        userRequest.identificationNumber,
      );
      if (existingUser) {
        throw new ConflictException(
          `User with identification number ${userRequest.identificationNumber} already exists`,
        );
      }

      console.log('Hashing password...');
      const hashedPassword = await bcrypt.hash(userRequest.password, 10);

      console.log('Mapping user...');
      // Mapea de UserRequestDto a User
      const newUser = this._mapper.map(userRequest, UserRequestDto, User);

      // Asignar los valores adicionales
      newUser.password = hashedPassword;
      newUser.tool = tool;
      newUser.state = userRequest.state ?? true;
      newUser.code_tool = userRequest.code_tool;

      // Agregar el rol usando el enum; asegúrate de que userRequest.role es de tipo RolesEnum
      newUser.role = userRequest.role;

      console.log('Saving user...');
      const savedUser = await this._userRepository.save(newUser);
      console.log('Saved user:', savedUser);

      console.log('Mapping response...');
      const userEntity =
        savedUser instanceof User
          ? savedUser
          : Object.assign(new User(), savedUser);
      const mappedResponse = this._mapper.map(
        userEntity,
        User,
        UserResponseDto,
      );
      console.log('Mapped response:', mappedResponse);

      return mappedResponse;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}
