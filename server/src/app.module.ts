import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { FileExploreModule } from './FileExplore/fileExplore.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.local.env'] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        database: configService.get('DATABASE_NAME'),
        password: configService.get('DATABASE_PASSWORD'),
        synchronize: configService.get<boolean>('DATABASE_SYNC'),
        logging: configService.get<boolean>('DATABASE_LOGGING'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
    }),
    FileExploreModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '',
//       database: 'appsql',
//       synchronize: true,
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       // logging: true,
//     }),
//     UserModule,
//     FileExploreModule,
//     AuthModule,
//   ],
//   controllers: [AppController],
//   providers: [PassportLocalStrategy],
//   exports: [],
// })
