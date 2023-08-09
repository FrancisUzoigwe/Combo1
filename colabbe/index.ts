import express from "express"
import { mainApp } from "./mainApp";
import { mydatabase } from "./config/mydatabase";


const app = express()

const realPort: number = 3400;
mainApp(app)
const Server = app.listen(realPort, () => {
    mydatabase()
    console.log("server listening on port", realPort)
})

process.on("uncaughtException", (err) => {
    console.log("")
    console.log("Server is shutting down due to uncaught exception", err)
    process.exit(1)
})


process.on("unhandledRejection", (reason) => {
    console.log("")
    console.log("Server is shutting down due to unhandled rejection", reason)

    Server.close(() => {
        process.exit(1)
    })
})