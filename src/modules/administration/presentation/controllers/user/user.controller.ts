import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserRequestDto } from 'src/modules/administration/domain/user/DTO/user-request.dto';
import { UserResponseDto } from 'src/modules/administration/domain/user/DTO/user-response.dto';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { CreateUserService } from 'src/modules/administration/services/useCases/user/createUser.service';
import { DeleteUserService } from 'src/modules/administration/services/useCases/user/deleteUser.service';
import { GetAllUserService } from 'src/modules/administration/services/useCases/user/getAllUser.service';
import { GetOneUserService } from 'src/modules/administration/services/useCases/user/getOneUser.service';
import { UpdateUserService } from 'src/modules/administration/services/useCases/user/updateUser.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _createUserService: CreateUserService,
    private readonly _getOneUserService: GetOneUserService,
    private readonly _getAllUserService: GetAllUserService,
    private readonly _updateUserService: UpdateUserService,
    private readonly _deleteUserService: DeleteUserService,
  ) {}

  @Post()
  async createUser(@Body() userDto: UserRequestDto): Promise<UserResponseDto> {
    const createdUser = await this._createUserService.handle(userDto);
    return createdUser; // No vuelvas a aplicar mapper.map aquí.
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this._getAllUserService.handle();
  }

  @Get(':identificationNumber')
  async findOne(
    @Param('identificationNumber', ParseIntPipe) identificationNumber: number,
  ): Promise<User> {
    const user = await this._getOneUserService.handle(identificationNumber);
    if (!user) {
      throw new NotFoundException(
        `User with identification number ${identificationNumber} not found`,
      );
    }
    return user;
  }

  @Put(':identificationNumber')
  async update(
    @Param('identificationNumber', ParseIntPipe) identificationNumber: number,
    @Body() loginData: Partial<User>,
  ): Promise<User> {
    return this._updateUserService.handle(identificationNumber, loginData);
  }

  @Delete(':identificationNumber/:state')
  async delete(
    @Param('identificationNumber', ParseIntPipe) identificationNumber: number,
    @Param('state', ParseIntPipe) state: number,
  ): Promise<boolean> {
    return this._deleteUserService.handle(identificationNumber, state);
  }
}
