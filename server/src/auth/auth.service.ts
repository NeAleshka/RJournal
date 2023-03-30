import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/entities/user.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByCond({
      where: { email, password },
    });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  generateJwtToken(dto: { id: number; email: string }) {
    return this.jwtService.sign({ id: dto.id, email: dto.email });
  }

  async login(user: UserEntity) {
    const { password, ...userData } = user;
    return {
      ...userData,
      token: this.generateJwtToken(userData),
    };
  }

  async register(dto: CreateUserDto) {
    try {
      const { password, ...userData } = await this.usersService.create({
        email: dto.email,
        fullName: dto.fullName,
        password: dto.password,
      });
      return {
        ...userData,
        token: this.generateJwtToken(userData),
      };
    } catch (e) {
      throw new ForbiddenException(`Ошибка при регистрации.`);
    }
  }
}
