import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FileExplore {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;

  @Column()
  type: string;

  @Column({ default: null })
  ext: string;

  @Column({ default: null })
  url: string;

  @Column({ default: null })
  parentId: string;
  @Column({ default: null })
  size: number;

  // many files  can belong to single user
  @ManyToOne(() => User, (user) => user.files)
  user: User;
}
