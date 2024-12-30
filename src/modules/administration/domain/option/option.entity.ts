import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { RoleOption } from '../roleOption/roleOption.entity';
import { Submodule } from '../subModule/subModule.entity';

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_option: number;

  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  name_option: string;

  @OneToMany(() => RoleOption, (roleOption) => roleOption.option)
  @AutoMap()
  roleOptions: RoleOption[];

  @ManyToOne(() => Submodule, (submodule) => submodule.options)
  @AutoMap()
  submodule: Submodule;

  @Column({ type: 'boolean', default: true })
  @AutoMap()
  state: boolean;

  @CreateDateColumn()
  @AutoMap()
  created_at: Date;

  @UpdateDateColumn()
  @AutoMap()
  updated_at: Date;
}
