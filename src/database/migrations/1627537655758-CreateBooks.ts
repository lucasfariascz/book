import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBooks1627537655758 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "books",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "SBN",
            type: "int",
            isUnique: true
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "description",
            type: "varchar"
          },
          {
            name: "author",
            type: "varchar"
          },
          {
            name: "inventory",
            type: "int"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
        ],
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("books");
    }

}
