import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}
  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req) {
    // jwt token
    const user: User = req.user;
    const payload = {
      username: user.username,
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    return { token: this.jwtService.sign(payload), user: payload };
  }
  @Get('/me')
  me(@Req() req) {
    // jwt token
    const user: User = req.user;
    const payload = {
      username: user.username,
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    return { user: payload };
  }
}
