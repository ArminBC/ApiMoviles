import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Card } from './card.entity';
import { LogService } from 'src/log_services/entities/log_serv.entities';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  id_user: number;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({
    name: 'id_user',
    foreignKeyConstraintName: 'account_user',
  })
  user?: User;

  @Column({ nullable: false, default: 0 })
  balance: number;

  @Column({ default: 0, nullable: false })
  status: number;

  @OneToMany(() => Card, (acc) => acc.account, { cascade: ['insert'] })
  card?: Card[];

  @OneToMany(() => LogService, (logse) => logse.account)
  logse?: LogService[];
}
