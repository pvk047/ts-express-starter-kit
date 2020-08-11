import app from './app'

import http from 'http'

import Logger from './loaders/logger';


const server: http.Server = http.createServer(app)

const port: number = app.get('port')|| 3000

server.listen(port, () => {
  Logger.info(`Server is Started on ${port}`)
})

export default server