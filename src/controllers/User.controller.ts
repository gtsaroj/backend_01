import { AsyncHanlder } from "../utils/AsyncHandler";
import { Request, Response } from "express";

 export const RegisterUser = AsyncHanlder(function (req: Request, res: Response) {
  res.status(200).json({
    message: "success to register",
  });
});

 export const LoginUser = AsyncHanlder((req: Request, res: Response) => {
  res.send(200).json({
    message: "success to login",
  });
});
