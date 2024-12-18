import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TypeOfIdentificationRequestDto {
  /**
   *name_typeIdentification
   */
  @IsString()
  @IsNotEmpty({
    message: 'El Nombre del  tipo de identificacion es obligatorio.',
  })
  name_typeIdentification: string;

  /**
   * code_typeIdentification
   */
  @IsNumber()
  @IsNotEmpty()
  @IsNumber()
  @AutoMap()
  code_typeIdentification: number;
}
