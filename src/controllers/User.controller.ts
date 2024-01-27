import { AsyncHanlder } from "../utils/AsyncHandler.js";
import { Request, Response } from "express";

 export const RegisterUser = AsyncHanlder(function (req: Request, res: Response) {
  
   const form = req.body;
   const { fullname, email, password, username } = form;
   console.log(fullname, email, password, username)
 });


 export const LoginUser = AsyncHanlder((req: Request, res: Response) => {
  res.send(200).json({
    message: "success to login",
  });
});
