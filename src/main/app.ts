import express from 'express'
import useRouter from './config/routes'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
useRouter(app)

export { app }
