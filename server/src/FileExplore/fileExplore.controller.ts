import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { FileExploreService } from './fileExplore.service';
import { CreateFileExploreDto } from './dto/create-FileExplore.dto';

@Controller('')
export class FileExploreController {
  constructor(private readonly fileExploreService: FileExploreService) {}

  @Get()
  async findAll(@Req() req: any) {
    const getdata = await this.fileExploreService.findAll(req.user.userId);

    return getdata;
  }
  @Get('/usedStorage')
  async getUsedStorage(@Req() req: any) {
    const getdata = await this.fileExploreService.getUsedStorage(
      req.user.userId,
    );

    return getdata;
  }
  @Post('/add')
  addNew(@Req() req: any, @Body() createFileExplore: CreateFileExploreDto) {
    return this.fileExploreService.add(createFileExplore, req.user.userId);
  }
  @Delete('/remove/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.fileExploreService.remove(id);
  }
}
