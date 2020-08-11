import {MongoDataBaseLoader} from '../loaders/mongoose'
import Logger  from '../loaders/logger'

export default async () =>   {
  await MongoDataBaseLoader.createConnection()
  Logger.info("Mongo DataBase Connected Successfully.")
}