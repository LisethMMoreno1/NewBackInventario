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
import { Role } from '../rol/rol.entity';
import { RoleModule } from '../roleModule/roleModule.entity';
import { Tool } from '../tool/tool.entity';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_user: number;

  @Column({ type: 'varchar', length: 15 })
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

  // Se almacena el código de la herramienta
  @AutoMap()
  @Column({ length: 50 })
  code_tool: string;

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

  @ManyToOne(() => Role, (role) => role.users)
  @AutoMap()
  role: Role;

  @ManyToOne(() => RoleModule, (roleModule) => roleModule.users, {
    nullable: true,
  })
  @JoinColumn({ name: 'role_module_id' })
  @AutoMap()
  roleModule: RoleModule;
}
