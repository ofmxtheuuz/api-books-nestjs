import { Injectable } from '@nestjs/common';
import { Book } from 'src/database/entities/Book';
import { Repository } from "typeorm"
import { source } from 'src/database/source';

@Injectable()
export class ApiService {

  _repo: Repository<Book>
  constructor() { this._repo = source.getRepository(Book) }

  async get_all(): Promise<Book[]> {
    return await this._repo.find()
  }

  async get(id: number): Promise<Book> {
    return await this._repo.findOne({ where: { id } })
  }

  async insert(infos: any): Promise<Book> {
    const { name, author, year, category } = infos
    const book = new Book()
    book.name = name
    book.author = author
    book.category = category
    book.release_year = year

    return await this._repo.save(book)
  }

  async delete(id: number) {
    return await this._repo.delete({ id })
  }

}
