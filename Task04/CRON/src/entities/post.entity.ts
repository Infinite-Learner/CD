import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post_CRON{
@PrimaryGeneratedColumn()
    id
    :number
    @Column()
    userId:number
    @Column()
    title:string
    @Column()
    body:string
    @Column()
    Time:Date
}   

