import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/entities/user.entity';

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

  async login(user: UserEntity) {
    const { password, ...userData } = user;
    const payload = { email: user.email, sub: user.id };
    return {
      ...userData,
      access_token: this.jwtService.sign(payload),
    };
  }
}
