/* import { User } from 'src/modules/administration/domain/user/user.entity';
 */
import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'Mantenimiento', name: 'TypeOfIdentification' })
export class TypeOfIdentification {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_typeIdentification: number;

  @Column({ unique: true })
  @AutoMap()
  name_typeIdentification: string;

  @Column()
  @AutoMap()
  code_typeIdentification: number;

  @Column({ type: 'boolean', default: false })
  @AutoMap()
  state: boolean;

  @CreateDateColumn()
  @AutoMap()
  created_at: Date;

  @UpdateDateColumn()
  @AutoMap()
  updated_at: Date;

  /*  @OneToMany(() => User, (user) => user.typeOfIdentification)
  users: User[]; */

  /* @OneToMany(() => Customers, (customers) => customers.typeOfIdentification)
  customers: Customers[]; */
}
