import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleGuard } from 'src/auth/guard/RoleGuard';
import { Constants } from 'src/utils/constants';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(new RoleGuard(Constants.ROLES.ADMIN_ROLE))
  async findAll() {
    const getdata = await this.userService.findAll();

    return getdata;
  }
  @Post('/singup')
  addNew(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.add(createUserDto);
  }
  @Patch('/update/:id')
  updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('/remove/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
