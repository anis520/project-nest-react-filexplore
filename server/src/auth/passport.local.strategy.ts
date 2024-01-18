import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from '../user/entities/user.entity';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super();
  }
  validate(username: string, password: string): User {
    const user: User | any = this.userService.findByUserName(username);
    if (user == undefined) throw new UnauthorizedException();
    if (user.password == password) return user;
  }
}
