import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { FileExplore } from './entities/fileExplore.entity';
import { FileExploreController } from './fileExplore.controller';
import { FileExploreService } from './fileExplore.service';

@Module({
  imports: [TypeOrmModule.forFeature([FileExplore])],
  controllers: [FileExploreController],
  providers: [FileExploreService],
})
export class FileExploreModule {}
