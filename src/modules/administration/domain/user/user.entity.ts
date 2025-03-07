import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Tool } from '../tool/tool.entity';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_user: number;

  @Column({ type: 'integer', unique: true, nullable: false })
  identificationNumber: number;

  @Column()
  @AutoMap()
  name: string;

  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  email: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @AutoMap()
  password: string;

  @ManyToOne(() => Tool, (tool) => tool.users)
  @JoinColumn({ name: 'code_tool', referencedColumnName: 'code' })
  @AutoMap()
  tool: Tool;

  @Column({ type: 'boolean', default: true })
  @AutoMap()
  state: boolean;

  @Column({ nullable: true })
  accessToken: string;

  @CreateDateColumn()
  @AutoMap()
  created_at: Date;

  @UpdateDateColumn()
  @AutoMap()
  updated_at: Date;
}
