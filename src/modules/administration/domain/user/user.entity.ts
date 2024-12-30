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
import { TypeOfGender } from 'src/modules/maintenance/domain/type-of-gender/typeGender.entity';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';

@Entity({
  name: 'Users',
})
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

  @ManyToOne(() => TypeOfGender, (typeOfGender) => typeOfGender.users)
  @JoinColumn({ name: 'id_typeOfGender' })
  typeOfGender: number;

  @ManyToOne(() => TypeOfIdentification, (typeOfId) => typeOfId.users)
  @JoinColumn({ name: 'id_typeIdentification' })
  typeOfIdentification: TypeOfIdentification;

  @Column({ type: 'boolean', default: false })
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
