import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserRequestDto } from 'src/modules/administration/domain/user/DTO/user-request.dto';
import { CreateUserService } from 'src/modules/administration/services/useCases/user/createUser.service';

/**
 * User controller
 */
@Controller('user')
@ApiTags('Users')
export class UserController {
  constructor(private readonly _createUser: CreateUserService) {}

  /**
   * Create a new user
   * @param userRequest
   */
  @Post('create')
  async createUser(@Body() userRequest: UserRequestDto) {
    return await this._createUser.handle(userRequest);
  }
}
