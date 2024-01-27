import { AsyncHanlder } from "../utils/AsyncHandler.js";
export const RegisterUser = AsyncHanlder(function (req, res) {
    const form = req.body;
    const { fullname, email, password, username } = form;
    console.log(fullname, email, password, username);
});
export const LoginUser = AsyncHanlder((req, res) => {
    res.send(200).json({
        message: "success to login",
    });
});
