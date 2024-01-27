import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  code?: number;
}

export const AsyncHanlder =
  (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
      return;
    } catch (error) {
      const customError = error as CustomError;
      res.status(customError.code || 500).json({
        status: false,
        message: customError.message || "Internal server error",
      });
    }
  };
