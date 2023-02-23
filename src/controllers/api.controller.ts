import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { Book } from 'src/database/entities/Book';
import { ApiService } from '../utils/services/api.service';

@Controller()
export class ApiController {

  constructor(private readonly _s: ApiService) {}
  
  /*

    / -> Exibir todos os livros
    /book/:id -> Exibir as especificações de um certo livro
    /book/insert -> Inserir um livro
    /book/delete/:id -> Deletar um livro

  */

  @Get()
  async index() {
    return await this._s.get_all()
  }

  @Get("book/:id") // localhost:3000/book/1
  async book(@Param("id") id: number){
    return await this._s.get(id)
  }

  @Post("book/insert")
  async insert(@Body() body): Promise<Book> {
    return await this._s.insert(body)
  }

  @Delete("book/delete/:id")
  async delete(@Param("id") id: number) {
    if(await (await this._s.delete(id)).affected == 1) return { code: 200, status: "The book was deleted with success!"}
  }
  
}
