import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginRequestDto } from 'src/modules/administration/domain/user/DTO/login-request.dto';
import { LoginResponseDto } from 'src/modules/administration/domain/user/DTO/login-response.dto';
import { UserRepository } from 'src/modules/administration/infrastructure/persistence/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginRequestDto): Promise<LoginResponseDto> {
    const user = await this._userRepository.getOne({
      where: { identificationNumber: loginDto.identificationNumber },
    });
    if (!user) {
      throw new UnauthorizedException('El número de identificación no existe');
    }

    if (user.blockedUntil && user.blockedUntil > new Date()) {
      throw new UnauthorizedException(
        'La cuenta está bloqueada. Intente de nuevo más tarde.',
      );
    }

    const isMatch = await bcrypt.compare(loginDto.password, user.password);
    if (!isMatch) {
      user.failedAttempts = (user.failedAttempts || 0) + 1;
      if (user.failedAttempts >= 3) {
        user.blockedUntil = new Date(Date.now() + 24 * 60 * 60 * 1000);
      }
      await this._userRepository.save(user);
      throw new UnauthorizedException('Contraseña inválida');
    }

    user.failedAttempts = 0;
    user.blockedUntil = null;

    const payload = {
      id: user.id_user,
      identification: user.identificationNumber,
    };
    const token = this.jwtService.sign(payload);
    const expiresIn = 3600;

    user.token = token;
    user.tokenExpires = new Date(Date.now() + expiresIn * 1000);
    await this._userRepository.save(user);

    return {
      id: user.id_user,
      identificationNumber: user.identificationNumber,
      accessToken: token,
      expiresIn,
    };
  }

  async recoverPassword(identificationNumber: number): Promise<void> {
    const user = await this._userRepository.getOne({
      where: { identificationNumber },
    });
    if (!user) {
      throw new BadRequestException('El número de identificación no existe');
    }
    // Lógica de recuperación...
  }
}
