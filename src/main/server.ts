import { app } from './app'
import env from './config/env'

const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`Server on port: ${port} - host:${env.dbHost} - db:${env.dbName}`)
})

// app.get('/', (req: Request, res: Response)=> {
//     res.send('Server is running')
// })

// app.use(express.json())
// app.use(routerUser)
