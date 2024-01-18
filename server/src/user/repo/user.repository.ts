import { Repository, EntityRepository } from 'typeorm';
import { User } from '../entities/user.entity';

export class UserRepository extends Repository<User> {}
