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
    title1:string
    @Column()
    title2:string
    @Column()
    body:string
    @Column()
    Time:Date
}   

