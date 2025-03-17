// roles-request.dto.ts
import { IsEnum } from 'class-validator';
import { RolesEnum } from '../roles.enum';

export class RolesRequestDto {
  @IsEnum(RolesEnum, {
    message: `El rol debe ser uno de los siguientes: ${Object.values(RolesEnum).join(', ')}`,
  })
  role: RolesEnum;
}
