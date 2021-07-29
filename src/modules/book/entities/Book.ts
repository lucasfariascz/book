import { v4 as uuidV4} from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("books")
class Book {
  @PrimaryColumn()
  id: string;

  @Column()
  SBN: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column()
  inventory: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Book };