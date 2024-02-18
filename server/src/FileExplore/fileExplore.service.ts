import { UserService } from 'src/user/user.service';
import { Injectable, Req } from '@nestjs/common';

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

  findAll(userId: any): Promise<FileExplore[]> {
    return this.FileExploreRepository.find({
      relations: ['user'],
      where: { user: { id: userId } },
    });
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
  async getUsedStorage(userId: any) {
    const data = await this.FileExploreRepository.find({
      relations: ['user'],
      where: { user: { id: userId } },
    });
    const result = data.reduce((total, obj) => total + obj.size, 0);
    return result;
  }
}
