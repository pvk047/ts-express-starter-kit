import appConfig from './app'
import dbConfig from './database'

export default {
  app: appConfig,
  db: dbConfig,
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
}