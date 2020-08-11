import express, { Application, Request, Response, Router } from 'express'

import morgan from 'morgan'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'

const app: Application = express()
const router: Router = express.Router()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

router.get('/', (_: Request,res: Response) => {
  return res.send('Hello,world')
})

app.use(router)

export default app