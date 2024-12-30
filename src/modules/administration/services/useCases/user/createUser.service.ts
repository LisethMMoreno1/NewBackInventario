import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserRequestDto } from 'src/modules/administration/domain/user/DTO/user-request.dto';
import { UserResponseDto } from 'src/modules/administration/domain/user/DTO/user-response.dto';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { RolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/rol.repository';
import { UserRepository } from 'src/modules/administration/infrastructure/persistence/repositories/user.repository';
import { TypeOfIdentificationRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeIdentification.repository';
import { TypeOfGenderRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typGender.repository';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
    private readonly _rolRepository: RolRepository,
    private readonly _typeOfIdentificationRepository: TypeOfIdentificationRepository,
    private readonly _typeOfGenderRepository: TypeOfGenderRepository,
  ) {}

  async handle(userRequest: UserRequestDto): Promise<UserResponseDto> {
    try {
      if (!userRequest.typeOfIdentification?.id_typeIdentification) {
        throw new BadRequestException('typeOfIdentification ID is required');
      }

      console.log('Fetching role...');
      const role = await this._rolRepository.getRoleById(
        userRequest.role.id_rol,
      );
      if (!role) {
        throw new NotFoundException(
          `Role with ID ${userRequest.role.id_rol} not found`,
        );
      }

      console.log('Fetching typeOfIdentification...');
      const typeOfIdentification =
        await this._typeOfIdentificationRepository.getById(
          userRequest.typeOfIdentification.id_typeIdentification,
        );
      if (!typeOfIdentification) {
        throw new NotFoundException(
          `TypeOfIdentification with ID ${userRequest.typeOfIdentification.id_typeIdentification} not found`,
        );
      }

      console.log('Checking for existing user...');
      const existingUser = await this._userRepository.getByIdentificationNumber(
        userRequest.identificationNumber,
      );
      if (existingUser) {
        throw new ConflictException(
          `User with identificationNumber ${userRequest.identificationNumber} already exists`,
        );
      }

      console.log('Hashing password...');
      const hashedPassword = await bcrypt.hash(userRequest.password, 10);

      console.log('Mapping user...');
      const newUser = this._mapper.map(userRequest, UserRequestDto, User);
      newUser.password = hashedPassword;
      newUser.role = role;
      newUser.typeOfIdentification = typeOfIdentification;
      newUser.state = true;

      console.log('Fetching typeOfGender...');
      const typeOfGender = await this._typeOfGenderRepository.getById(
        userRequest.typeOfGender.id_typeOfGender,
      );
      if (!typeOfGender) {
        throw new NotFoundException(
          `TypeOfGender with ID ${userRequest.typeOfGender.id_typeOfGender} not found`,
        );
      }

      newUser.typeOfGender = typeOfGender.id_typeOfGender;

      console.log('Saving user...');
      const savedUser = await this._userRepository.save(newUser);

      console.log('Mapping response...', savedUser);
      const userResponse = this._mapper.map(savedUser, User, UserResponseDto);

      console.log('User created successfully.');
      return userResponse;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}
