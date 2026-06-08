import { config } from "dotenv"
config()

export const envConfig = {
    connectionString: process.env.DB_URI,
    port: process.env.PORT
}
