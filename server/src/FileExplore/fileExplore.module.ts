import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { FileExplore } from './entities/fileExplore.entity';
import { FileExploreController } from './fileExplore.controller';
import { FileExploreService } from './fileExplore.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([FileExplore]), UserModule],
  controllers: [FileExploreController],
  providers: [FileExploreService],
})
export class FileExploreModule {}
