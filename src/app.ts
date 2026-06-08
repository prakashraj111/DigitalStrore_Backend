import express, { Request, Response } from 'express'
const app = express()
import "./database/connection"

app.use(express.json())

export default app

