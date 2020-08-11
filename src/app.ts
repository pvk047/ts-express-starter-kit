import express, { Application, Request, Response } from 'express'

import morgan from 'morgan'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'

const app: Application = express()

import config from './config'

app.set('port',config.app.port)
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

import routes from './routes'
import Logger from './loaders/logger';
import { MongoDataBaseLoader } from './loaders/mongoose';
import loader from './loaders'

async function loadApp () {
  await loader()
}

app.use(`/v${config.app.version || '1.0'}`,routes)

app.use((_: Request, res: Response) => {
  Logger.warn('Page Not Found(404).')
  return res.status(404).json({
    success: false,
    message: 'Page Not Found(404).'
  })
})

process.on('uncaughtException',(err) => {
  Logger.error(err)
  MongoDataBaseLoader.closeConnection()
  process.exit(1)
})
process.on('unhandledRejection',(err) => {
  Logger.error(err)
  MongoDataBaseLoader.closeConnection()
  process.exit(1)
})

loadApp()

export default app