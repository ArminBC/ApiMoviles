import { Service } from "src/services/entitites/services.entitys";
import { User } from "src/users/entities/user.entity";
import { Account } from "src/accounts/entities/account.entity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity()
export class LogService {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  reference: string;
 
  @Column()
  id_service: number;

  @Column()
  id_users: number;

  @Column()
  id_account: number;



  @ManyToOne(() => Service, (service) => service.id, {nullable: false})
  @JoinColumn({
    name: 'id_service',
    referencedColumnName: "id",
    foreignKeyConstraintName: 'logserv_services'
  })
  service?: Service

  @ManyToOne(() => User, (user) => user.id, {nullable: false})
  @JoinColumn({
    name: 'id_users',
    referencedColumnName: "id",
    foreignKeyConstraintName: 'logserv_users'
  })
  user?: User


  @ManyToOne(() => Account, (account) => account.id, {nullable: false})
  @JoinColumn({
    name: 'id_account',
    referencedColumnName: "id",
    foreignKeyConstraintName: 'logserv_account'
  })
  account?: Account


}
  