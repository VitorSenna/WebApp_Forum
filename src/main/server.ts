import { app } from './app'
import env from './config/env'

const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`Server on port: ${port} - host:${env.dbHost} - db:${env.dbName}`)
})
