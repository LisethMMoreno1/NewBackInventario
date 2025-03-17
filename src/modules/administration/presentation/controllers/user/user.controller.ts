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
  @Post()
  async createUser(@Body() userRequest: UserRequestDto) {
    userRequest.identificationNumber = Number(userRequest.identificationNumber);
    return this._createUserService.handle(userRequest);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this._getAllUserService.handle();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = await this._getOneUserService.handle(id);
    if (!user) {
      throw new NotFoundException(
        `User with identification number ${id} not found`,
      );
    }
    return user;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() loginData: Partial<User>,
  ): Promise<User> {
    return this._updateUserService.handle(id, loginData);
  }

  @Delete(':identificationNumber/:state')
  async delete(
    @Param('identificationNumber', ParseIntPipe) identificationNumber: number,
    @Param('state', ParseIntPipe) state: number,
  ): Promise<boolean> {
    return this._deleteUserService.handle(identificationNumber, state);
  }
}
