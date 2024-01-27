import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { RegisterUser, LoginUser } from "../controllers/User.controller.js";
const router = Router();
router.route("/register").post(upload.single("avatar"), RegisterUser);
router.route("/login").post(upload.none(), LoginUser);
router.route("/route").get(() => {
    console.log("running");
});
export default { router };
