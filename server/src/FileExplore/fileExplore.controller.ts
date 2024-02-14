import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { FileExploreService } from './fileExplore.service';
import { CreateFileExploreDto } from './dto/create-FileExplore.dto';

@Controller('')
export class FileExploreController {
  constructor(private readonly fileExploreService: FileExploreService) {}

  @Get()
  async findAll() {
    const getdata = await this.fileExploreService.findAll();

    return getdata;
  }
  @Post('/add/:userId')
  addNew(
    @Body() createFileExplore: CreateFileExploreDto,
    @Param('userId') userId: number,
  ) {
    return this.fileExploreService.add(createFileExplore, userId);
  }
  @Delete('/remove/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.fileExploreService.remove(id);
  }
}
