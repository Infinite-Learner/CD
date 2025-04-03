import { MigrationInterface, QueryRunner } from "typeorm";

export class Test0011742791480824 implements MigrationInterface {
    name = 'Test0011742791480824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_details\` DROP COLUMN \`role\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_details\` ADD \`role\` varchar(255) NOT NULL`);
    }

}
