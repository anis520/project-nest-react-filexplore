import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  getAlluserRepo(): Promise<User[]> {
    return this.find();
  }
}
