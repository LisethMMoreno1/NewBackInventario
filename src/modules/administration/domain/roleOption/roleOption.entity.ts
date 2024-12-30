import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Role } from '../rol/rol.entity';
import { Option } from '../option/option.entity';
import { AutoMap } from '@automapper/classes';
import { RoleModule } from '../roleModule/roleModule.entity';

@Entity('role_options')
export class RoleOption {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_roleOption: number;

  @ManyToOne(() => Role, (role) => role.roleOptions, { nullable: false })
  @JoinColumn({ name: 'role_id' })
  @AutoMap()
  role: Role;

  @Column({ name: 'role_id' })
  role_id: number;

  @ManyToOne(() => Option, (option) => option.roleOptions, { nullable: false })
  @JoinColumn({ name: 'option_id' })
  @AutoMap()
  option: Option;

  @ManyToOne(() => RoleModule, (roleModule) => roleModule.roleOptions)
  @JoinColumn({ name: 'role_module_id' })
  roleModule: RoleModule;

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
