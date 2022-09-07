import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { createHash } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validate(username: string, pass: string): Promise<any> {
    let users;
    if (username.includes('@')) {
      users = await this.usersService.findOneEmail(username);
    } else {
      users = await this.usersService.findOneName(username);
    }
    const hashString = createHash('sha256').update(pass).digest('hex');
    if (
      users &&
      users.password === hashString &&
      users.role === 'admin' &&
      users.active === true
    ) {
      const { password, ...result } = users;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      sub: user._doc._id,
      username: user._doc.username,
      email: user._doc.email,
    };

    console.log(user);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
