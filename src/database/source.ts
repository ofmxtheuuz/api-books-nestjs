import "reflect-metadata"
import { DataSource } from "typeorm"
import { Book } from "./entities/Book"

export const source = new DataSource({
  type: "mysql",
  host: "db",
  port: 3306,
  username: "root",
  password: "",
  database: "api_nest",
  synchronize: true,
  logging: false,
  entities: [ Book ],
  migrations: [],
  subscribers: []
})