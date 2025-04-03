import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post_Ts{
@PrimaryGeneratedColumn()
    id
    :number
    @Column()
    userId:number
    @Column()
    title:string
    @Column()
    body:string
}   