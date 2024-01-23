import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import path, { dirname } from "path"


const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cors)
app.use(cookieParser())

// import router
import UserRouter from "./routes/user.routes"

app.use("/api/v1/user", UserRouter)