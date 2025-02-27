/* import { User } from 'src/modules/administration/domain/user/user.entity';
 */
import { AutoMap } from '@automapper/classes';
import { User } from 'src/modules/administration/domain/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'TypeOfGender' })
export class TypeOfGender {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_typeOfGender: number;

  @Column({ unique: true })
  @AutoMap()
  name_typeOfGender: string;

  @Column({ type: 'boolean', default: false })
  @AutoMap()
  state: boolean;

  @OneToMany(() => User, (user) => user.typeOfGender)
  users: User[];

  @CreateDateColumn()
  @AutoMap()
  created_at: Date;

  @UpdateDateColumn()
  @AutoMap()
  updated_at: Date;
}
