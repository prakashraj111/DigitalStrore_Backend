import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";

const sequelize = new Sequelize(envConfig.connectionString as string, {
    models: [__dirname + '/models']
})
try {
    sequelize.authenticate()
        .then(() => {
            console.log("Database Connected Successfully!");
        })
        .catch((err: any) => {
            console.log("Error" + err);
        })
} catch (error) {
    console.log(error);
}

sequelize.sync({ force: false, alter: false })  // alter : true helps to keep the data and update the column 
    .then(() => {
        console.log("Database Synced Successfully!");
    })

export default sequelize;