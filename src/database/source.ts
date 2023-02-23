import "reflect-metadata"
import { DataSource } from "typeorm"
import { Book } from "./entities/Book"

export const source = new DataSource({
  type: "mysql",
  host: "db",
  port: 3303,
  username: "root",
  password: "mxtz2023",
  database: "api_nest",
  synchronize: true,
  logging: false,
  entities: [ Book ],
  migrations: [],
  subscribers: []
})