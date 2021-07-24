import {MigrationInterface, QueryRunner} from "typeorm";

export class useStarTrue1612710233787 implements MigrationInterface {
    name = 'useStarTrue1612710233787'

    public async up(queryRunner: QueryRunner): Promise<void> {
				await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "useStarForReactionFallback"`);
        await queryRunner.query(`ALTER TABLE "meta" ADD "useStarForReactionFallback" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			  await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "useStarForReactionFallback"`);
        await queryRunner.query(`ALTER TABLE "meta" ADD "useStarForReactionFallback" boolean NOT NULL DEFAULT false`);
    }

}
