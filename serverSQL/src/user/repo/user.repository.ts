import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  getAllUsersRepo(): Promise<User[]> {
    return this.find();
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.create(createUserDto);
    return this.save(newUser);
  }

  findUserById(userId: number): Promise<User | undefined> {
    return this.findOne(userId);
  }

  findUsersByName(name: string): Promise<User[]> {
    return this.find({ where: { name } });
  }

  findByJob(job: string): Promise<User[]> {
    return this.find({ where: { job } });
  }

  deleteUserById(userId: number): Promise<void> {
    return this.delete(userId).then(() => {});
  }

  countUsers(): Promise<number> {
    return this.count();
  }

  findUsersWithPagination(page: number, pageSize: number): Promise<User[]> {
    return this.find({
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
  }
}
