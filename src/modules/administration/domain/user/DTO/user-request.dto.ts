import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { TypeOfGender } from 'src/modules/maintenance/domain/type-of-gender/typeGender.entity';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';
import { Role } from '../../rol/rol.entity';
import { RoleModule } from '../../roleModule/roleModule.entity';

export class UserRequestDto {
  @IsNotEmpty()
  @AutoMap()
  identificationNumber: number;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(1, 50)
  @AutoMap()
  email: string;

  @IsOptional()
  @IsString()
  @Length(8, 250)
  @AutoMap()
  password: string;

  @IsNotEmpty()
  @AutoMap()
  typeOfGender: TypeOfGender;

  @AutoMap()
  @IsNotEmpty()
  typeOfIdentification: TypeOfIdentification;

  @IsBoolean()
  @IsOptional() // Si no es obligatorio
  state?: boolean;

  @IsOptional()
  @IsString()
  @AutoMap()
  accessToken: string;

  @IsNotEmpty()
  @AutoMap()
  role: Role;

  @IsOptional()
  @AutoMap()
  roleModule: RoleModule;
}
