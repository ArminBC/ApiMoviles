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
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  reference: string;

  @ManyToOne(() => Service, (service) => service.id, {nullable: false})
  @JoinColumn({
    name: 'id_service',
    referencedColumnName: "id",
    foreignKeyConstraintName: 'logserv_services'
  })
  services?: Service


  

}
  