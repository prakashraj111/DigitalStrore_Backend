import express, { Request, Response } from 'express'
const app = express()
import userRoute from './routes/userRoute'
import "./database/connection"

app.use(express.json())

app.use("/api/auth", userRoute)

export default app

