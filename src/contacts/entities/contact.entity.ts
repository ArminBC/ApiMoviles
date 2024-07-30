import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({ unique: false, nullable: false })
    id_user: number

    @Column({ nullable: false })
    nickname: string

    @Column({ nullable: false })
    email: string

    @Column({ nullable: false })
    phone: string

    @Column({ nullable: false })
    bankname: string

    @Column({ nullable: false})
    account: string


}

