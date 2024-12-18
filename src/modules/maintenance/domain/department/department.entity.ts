import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { City } from '../cities/cities.entity';

@Entity({ schema: 'Mantenimiento', name: 'Departments' })
export class Department {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_department: number;

  @Column({ unique: true })
  @AutoMap()
  name_department: string;

  @Column({ unique: true })
  @AutoMap()
  code_department: string;

  @OneToMany(() => City, (city) => city.department)
  @AutoMap()
  cities: City[];

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
