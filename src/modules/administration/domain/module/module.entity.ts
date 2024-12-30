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
import { Submodule } from '../subModule/subModule.entity';

@Entity('modules')
export class Module {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_module: number;

  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  name_module: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @AutoMap()
  icon: string;

  @OneToMany(() => RoleModule, (roleModule) => roleModule.module)
  @AutoMap()
  roleModules: RoleModule[];

  @OneToMany(() => Submodule, (submodule) => submodule.module)
  @AutoMap()
  submodules: Submodule[];

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
