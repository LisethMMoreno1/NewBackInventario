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
import { RolesEnum } from '../role/roles.enum';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_user: number;

  @Column({ type: 'varchar', nullable: false })
  @AutoMap()
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

  @AutoMap()
  code_tool: string;

  @Column({
    type: 'enum',
    enum: RolesEnum,
    default: RolesEnum.OPERADOR_TECNICO,
  })
  @AutoMap()
  role: RolesEnum;

  @Column({ type: 'boolean', default: true })
  @AutoMap()
  state: boolean;

  @Column({ default: 0 })
  failedAttempts: number;

  @Column({ type: 'timestamp', nullable: true })
  blockedUntil: Date;

  @Column({ nullable: true })
  token: string;

  @Column({ type: 'timestamp', nullable: true })
  tokenExpires: Date;

  @CreateDateColumn()
  @AutoMap()
  created_at: Date;

  @UpdateDateColumn()
  @AutoMap()
  updated_at: Date;
}
