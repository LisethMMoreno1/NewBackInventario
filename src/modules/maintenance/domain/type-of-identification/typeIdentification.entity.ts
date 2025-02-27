import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/modules/administration/domain/user/user.entity';

@Entity({ name: 'TypeOfIdentification' })
export class TypeOfIdentification {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_typeIdentification: number;

  @Column({ unique: true })
  @AutoMap()
  name_typeIdentification: string;

  @Column()
  @AutoMap()
  code_typeIdentification: string;

  @Column({ type: 'boolean', default: true })
  @AutoMap()
  state: boolean;

  @CreateDateColumn()
  @AutoMap()
  created_at: Date;

  @UpdateDateColumn()
  @AutoMap()
  updated_at: Date;

  @OneToMany(() => User, (user) => user.typeOfIdentification)
  users: User[];

  /* @OneToMany(() => Customers, (customers) => customers.typeOfIdentification)
  customers: Customers[]; */
}
