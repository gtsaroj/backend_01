import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cors());
app.use(cookieParser());
// import route
import RouteUser from "./routes/user.routes.js";
app.use("/api/v1/user", RouteUser.router);
app.get("/api/v2", (req, res) => {
    res.send(`Hello world`);
});
export { app };
