import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class repo_details {
@PrimaryColumn()
id: number;
@Column()
node_id: string;
@Column()
full_name: string;
@Column()
name: string;
@Column('boolean')
private: boolean;
@Column('boolean')
fork: boolean;
@Column()
url: string;
@Column()
downloads_url: string;
@Column()
deployments_url: string;
@Column()
created_at: string;
@Column()
html_url: string;
}   