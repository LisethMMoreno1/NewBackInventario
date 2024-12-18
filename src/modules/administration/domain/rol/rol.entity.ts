import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { User } from '../user/user.entity';

@Entity({ schema: 'Mantenimiento', name: 'Role' })
export class Role {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_rol: number;

  @Column()
  @AutoMap()
  name_rol: string; // Administrador, empleado, usuario, etc.

  @Column()
  @AutoMap()
  description: string;

  @OneToMany(() => User, (user) => user.role)
  @AutoMap()
  users: User[];

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
