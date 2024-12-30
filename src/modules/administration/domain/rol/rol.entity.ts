import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleModule } from '../roleModule/roleModule.entity';
import { RoleOption } from '../roleOption/roleOption.entity';
import { User } from '../user/user.entity';

@Entity({ name: 'Role' })
export class Role {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_rol: number;

  @Column()
  @AutoMap()
  name_rol: string;

  @Column()
  @AutoMap()
  description: string;

  @OneToMany(() => User, (user) => user.role)
  @AutoMap()
  users: User[];

  @OneToMany(() => RoleModule, (roleModule) => roleModule.role)
  @AutoMap()
  roleModules: RoleModule[];

  @OneToMany(() => RoleOption, (roleOption) => roleOption.role)
  @AutoMap()
  roleOptions: RoleOption[];

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
