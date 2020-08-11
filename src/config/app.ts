import dotenv from 'dotenv'

dotenv.config()

const env: string | undefined = process.env.NODE_ENV

if(!env) {
  throw new Error('Config Error: env is Missing.Check .env File.')
}

export default {
  version: process.env.VERSION,
  name: process.env.NAME,
  port: process.env.PORT,
  env
}