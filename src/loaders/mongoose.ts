import mongoose from 'mongoose';
import { Db } from 'mongodb'

import config from '../config'

export class MongoDataBaseLoader {
  static async createConnection(connectionString: string = config.db.mongo_db_connection_url): Promise<Db| undefined> {
    const connection = await mongoose.connect(connectionString, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    return connection.connection.db; 
  }

  static closeConnection(): void {
    mongoose.connection.close()
  }
}