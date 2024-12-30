import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Column,
  JoinColumn,
} from 'typeorm';
import { Role } from '../rol/rol.entity';
import { Submodule } from '../subModule/subModule.entity';
import { AutoMap } from '@automapper/classes';
import { Module } from '../module/module.entity';
import { User } from '../user/user.entity';
import { RoleOption } from '../roleOption/roleOption.entity';

@Entity('role_modules')
export class RoleModule {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_roleModule: number;

  @ManyToOne(() => Role, (role) => role.roleModules)
  @JoinColumn({ name: 'role_id' })
  @AutoMap()
  role: Role;

  @Column({ nullable: true })
  @AutoMap()
  permissions: string;

  @ManyToOne(() => Module, (module) => module.roleModules)
  @AutoMap()
  module: Module;

  @OneToMany(() => RoleOption, (roleOption) => roleOption.roleModule)
  roleOptions: RoleOption[];

  @ManyToOne(() => Submodule, (submodule) => submodule.roleModules, {
    nullable: true,
  })
  @AutoMap()
  submodule: Submodule;

  @OneToMany(() => User, (user) => user.roleModule)
  @AutoMap()
  users: User[];
}
