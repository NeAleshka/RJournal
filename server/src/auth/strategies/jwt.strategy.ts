import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly UsersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'test',
    });
  }

  async validate(payload: { email: string; sub: number }) {
    const user = await this.UsersService.findByCond({
      where: { id: payload.sub, email: payload.email },
    });

    if (!user) {
      throw new UnauthorizedException('Пользователь не найден');
    }
    return { id: user.id, email: user.email };
  }
}
