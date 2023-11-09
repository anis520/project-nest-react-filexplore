import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Response } from 'express';
import { User } from './entities/user.entity';

@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    const getdata = await this.userService.findAll();
    console.log(getdata);

    return getdata;
  }
}
