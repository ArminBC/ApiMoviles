import { Bank } from "src/banks/entities/bank.entity";

import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity()
export class BankBranches {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  latitude: string;

  @Column()
  length: string;
 
  @Column()
  id_bank: number;



  @ManyToOne(() => Bank, (banks) => banks.id, {nullable: false})
  @JoinColumn({
    name: 'id_bank',
    referencedColumnName: "id",
    foreignKeyConstraintName: 'bankB_bank'
  })
  banks?: Bank

}