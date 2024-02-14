import { UserService } from 'src/user/user.service';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileExploreDto } from './dto/create-FileExplore.dto';
import { FileExplore } from './entities/fileExplore.entity';

@Injectable()
export class FileExploreService {
  constructor(
    @InjectRepository(FileExplore)
    private readonly FileExploreRepository: Repository<FileExplore>,
    private userService: UserService,
  ) {}

  findAll(): Promise<FileExplore[]> {
    return this.FileExploreRepository.find();
  }

  async add(
    fileExploreDto: CreateFileExploreDto,
    userId: number,
  ): Promise<FileExplore> {
    const fileExplore: FileExplore = new FileExplore();

    fileExplore.title = fileExploreDto.title;
    fileExplore.type = fileExploreDto.type;
    fileExplore.ext = fileExploreDto.ext;
    fileExplore.parentId = fileExploreDto.parentId;
    fileExplore.url = fileExploreDto.url;
    fileExplore.size = fileExploreDto.size;
    fileExplore.user = await this.userService.findUserById(userId);

    return this.FileExploreRepository.save(fileExplore);
  }
  remove(id: number) {
    const deltedData = this.FileExploreRepository.findOne({ where: { id } });
    this.FileExploreRepository.delete(id);
    return deltedData;
  }
}
