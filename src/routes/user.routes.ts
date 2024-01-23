import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.ts";
import { RegisterUser, LoginUser } from "../controllers/User.controller.ts";

const router = Router();

router.route("/register").post(upload.single("avatar"), RegisterUser);
router.route("/login").post(upload.none(), LoginUser);
