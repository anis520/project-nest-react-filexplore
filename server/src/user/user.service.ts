import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
// import { UserRepository } from './repo/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Constants } from 'src/utils/constants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async add(createUserDto: CreateUserDto): Promise<any> {
    const user: User = new User();

    const checkIsExist = await this.findByUserEmail(createUserDto.email);

    if (checkIsExist) {
      throw new BadRequestException('already exits');
      // throw new HttpException('Already exist', HttpStatus.BAD_REQUEST);
    }
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.role = Constants.ROLES.NORMAL_ROLE;

    return {
      user: this.userRepository.save(user),
      message: 'User register successfull',
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user: User = new User();
    user.username = updateUserDto.username;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.id = id;
    return this.userRepository.save(user);
  }
  remove(id: number) {
    const deltedData = this.userRepository.findOne({ where: { id } });

    this.userRepository.delete(id);

    return deltedData;
  }
  async findByUserEmail(email: string) {
    const data = await this.userRepository.findOne({ where: { email } });

    return data;
  }

  async findUserById(id: number) {
    const data = await this.userRepository.findOne({ where: { id } });

    return data;
  }
}
