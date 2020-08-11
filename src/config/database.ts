import dotenv from 'dotenv'

dotenv.config()

const env: string | undefined = process.env.NODE_ENV

if(!env) {
  throw new Error('Config Error: env is Missing.Check .env File.')
}

if(!process.env.MONGO_CONNECTION_URL) {
  throw new Error('Config Error: MONGO_CONNECTION_URL is Missing.Check .env File.')
}

export default {
  mongo_db_connection_url: process.env.MONGO_CONNECTION_URL,
}