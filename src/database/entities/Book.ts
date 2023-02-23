import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  author: string

  @Column()
  release_year: number

  @Column()
  category: string
}