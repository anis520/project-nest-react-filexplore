import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { FileExploreModule } from './FileExplore/fileExplore.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'appsql',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // logging: true,
    }),
    UserModule,
    FileExploreModule,
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
