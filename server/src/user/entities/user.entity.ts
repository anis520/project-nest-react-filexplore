import { FileExplore } from 'src/FileExplore/entities/fileExplore.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  role: string;
  // one user can have multipe Files
  @OneToMany(() => FileExplore, (fileExplore) => fileExplore.user)
  files: FileExplore[];
}
