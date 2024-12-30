import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Department } from '../department/department.entity';
import { AutoMap } from '@automapper/classes';

@Entity({ schema: 'Mantenimiento', name: 'cities' })
export class City {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_city: number;

  @Column({ unique: true })
  @AutoMap()
  name_city: string;

  @Column({ unique: true })
  @AutoMap()
  code_city: number;

  @ManyToOne(() => Department, (department) => department.cities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_department' })
  @AutoMap()
  department: Department;

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
