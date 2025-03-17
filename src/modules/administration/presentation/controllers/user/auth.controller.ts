import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { LoginRequestDto } from 'src/modules/administration/domain/user/DTO/login-request.dto';
import { LoginResponseDto } from 'src/modules/administration/domain/user/DTO/login-response.dto';
import { AuthService } from 'src/modules/administration/services/useCases/user/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Method for login.
   *
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginRequestDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }

  /**
   * Method to start the password recovery process.
   *
   */
  @Post('recover-password')
  @HttpCode(HttpStatus.OK)
  async recoverPassword(
    @Body('identification') identificationNumber: number,
  ): Promise<{ message: string }> {
    await this.authService.recoverPassword(identificationNumber);
    return {
      message: 'Se ha enviado un correo para la recuperación de la contraseña.',
    };
  }
}
