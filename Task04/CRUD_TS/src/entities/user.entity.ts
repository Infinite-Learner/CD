import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class userDetails {
    @PrimaryGeneratedColumn()
    id: string;
    @PrimaryColumn()
    email: string;
    @Column()
    username: string;
    @Column()
    password: string
    @Column()
    role:string
}