import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'Users',
})
export class User {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_user: number;

  @Column({ type: 'varchar', length: 15 })
  @AutoMap()
  identificationNumber: string;

  @Column()
  @AutoMap()
  name: string;

  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  email: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @AutoMap()
  password: string;

  @Column({ type: 'boolean', default: false })
  @AutoMap()
  state: boolean;

  @CreateDateColumn()
  @AutoMap()
  created_at: Date;

  @UpdateDateColumn()
  @AutoMap()
  updated_at: Date;
}
