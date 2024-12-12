import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

/**
 * A class representing a user request dto.
 */
export class UserRequestDto {
  /**
   * User request name
   */
  @IsString()
  @IsNotEmpty({ message: 'Campo requerido.' })
  @AutoMap()
  name: string;

  /**
   * User request identificationNumber
   */
  @IsString()
  @IsNotEmpty({ message: 'Campo requerido' })
  @AutoMap()
  @Length(6, 15, {
    message:
      'Campo debe tener por lo menos 6 dígitos y que no sobrepase de los 15.',
  })
  identificationNumber: string;

  /**
   * User request email
   */
  @IsEmail({}, { message: 'Ingresa un correo valido.' })
  @IsNotEmpty({ message: 'Campo requerido' })
  @AutoMap()
  email: string;
}
