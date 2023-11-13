import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repo/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  add(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.name = createUserDto.name;
    user.sallary = createUserDto.sallary;
    user.job = createUserDto.job;
    return this.userRepository.save(user);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user: User = new User();
    user.name = updateUserDto.name;
    user.sallary = updateUserDto.sallary;
    user.job = updateUserDto.job;
    user.id = id;
    return this.userRepository.save(user);
  }
  remove(id: number) {
    const deltedData = this.userRepository.findOne({ where: { id } });
    this.userRepository.delete(id);
    return deltedData;
  }
}
