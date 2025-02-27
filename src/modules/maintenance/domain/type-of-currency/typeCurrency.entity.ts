import { AutoMap } from '@automapper/classes';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'TypeOfCurrency' })
export class TypeOfCurrency {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_typeOfCurrency: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  @AutoMap()
  country_typeOfCurrency: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  @AutoMap()
  divisa_typeOfCurrency: string;

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
