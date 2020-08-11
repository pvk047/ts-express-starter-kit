import express,{ Request, Response, Router} from 'express'

import config from '../config'

const router:Router = express.Router()

router.get('/', (_: Request,res: Response) => {
  return res.json({
    success: true,
    message: `Welcome to ${config.app.name}.`
  })
})

export default router