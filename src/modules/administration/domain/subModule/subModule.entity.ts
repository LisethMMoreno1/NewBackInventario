import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Module } from '../module/module.entity';
import { Option } from '../option/option.entity';
import { RoleModule } from '../roleModule/roleModule.entity';
import { AutoMap } from '@automapper/classes';

@Entity('submodules')
export class Submodule {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_subModule: number;

  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  name_subModule: string;

  @ManyToOne(() => Module, (module) => module.submodules)
  @AutoMap()
  module: Module;

  @OneToMany(() => RoleModule, (roleModule) => roleModule.submodule)
  @AutoMap()
  roleModules: RoleModule[];

  @OneToMany(() => Option, (option) => option.submodule)
  @AutoMap()
  options: Option[];

  @ManyToOne(() => Submodule, (submodule) => submodule.options)
  @AutoMap()
  submodule: Submodule;

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
