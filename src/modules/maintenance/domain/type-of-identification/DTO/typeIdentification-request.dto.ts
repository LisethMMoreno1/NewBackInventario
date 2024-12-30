import { IsNotEmpty, IsString } from 'class-validator';

export class TypeOfIdentificationRequestDto {
  @IsString()
  @IsNotEmpty({
    message: 'El Nombre del tipo de identificación es obligatorio.',
  })
  name_typeIdentification: string;

  @IsString()
  @IsNotEmpty({
    message: 'El Código del tipo de identificación es obligatorio.',
  })
  code_typeIdentification: string;
}
