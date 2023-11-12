import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
