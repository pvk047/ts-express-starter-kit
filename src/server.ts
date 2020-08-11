import app from './app'

import http from 'http'


const server: http.Server = http.createServer(app)

const port: number = app.get('port')|| 3000

server.listen(port, () => {
  console.log(`Server is Started on ${port}`)
})

export default server