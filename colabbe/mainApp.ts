import express, {Application, NextFunction, Request, Response} from "express"
import cors from "cors"
import auth from "./router/authRouter"
import task from "./router/taskRouter"
// import { HTTP, mainError } from "./error/mainError"
// import { errorHandler } from "./error/errorBuilder"


export const mainApp = (app: Application) => {
    app.use(express.json())
    app.use(cors({
        origin: "http://localhost:5173/",
        methods: ["GET", "POST", "DELETE", "UPDATE"]
    }))
    app.get("/", (req: Request, res: Response) => {
        return res.status(200).json({
            message : "Status code 200"
        })
    })
   app.use("/api/v1/", task)
   app.use("/api/v1/", auth)
//     app.all("*", (req: Request, res: Response, next: NextFunction) => {
// new mainError({
//     name: "Route Error",
//     message: "This is is a route error",
//     status: HTTP.BAD,
//     success: false
// })
//     })
//     app.use(errorHandler)
    
}