import { Request, Response, NextFunction } from "express";
export const AsyncHanlder =
  (fn: Function) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        await fn(req, res, next);
        return
    } catch (error) {
        res.status(error.code || 500).json({
            status: false,
            message: error.message || "Internal server error"
        })
    }
  };

