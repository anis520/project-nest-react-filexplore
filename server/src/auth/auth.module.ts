import { Module } from '@nestjs/common';

import { UserModule } from 'src/user/user.module';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule, UserModule],
  controllers: [],
  providers: [UserService, PassportLocalStrategy],
})
export class AuthModule {}
