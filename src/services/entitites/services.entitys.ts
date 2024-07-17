import { LogService } from 'src/log_services/entities/log_serv.entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'; 




@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => LogService, (logse) => logse.service)
  logse: LogService[];
}