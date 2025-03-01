import { AutoMap } from '@automapper/classes';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'TypeOfAddress' })
export class TypeOfAddress {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_typeOfAddress: number;

  @Column()
  @AutoMap()
  name_typeOfAddress: string;

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
