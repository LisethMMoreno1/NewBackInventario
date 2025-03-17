import { Controller, Get } from '@nestjs/common';
import { RolesEnum } from 'src/modules/administration/domain/role/roles.enum';

@Controller('roles')
export class RolesController {
  @Get()
  getRoles(): RolesEnum[] {
    return Object.values(RolesEnum);
  }
}
