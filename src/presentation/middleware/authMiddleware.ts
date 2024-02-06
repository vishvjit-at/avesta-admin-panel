import { NextFunction, Request, Response } from "express";
import { UserVerification } from "../../gateways/userVerification";

export class AuthMiddleware {
  static async authenticateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userVerification = new UserVerification();

      const isUserValid = await userVerification.verify(req.query.token as string);

      if (!isUserValid) {
        res.status(401).send({ success: false, message: "sorry!, you are not authenticated!" });
      } else {
        next();
      }
    } catch (error) {
      res.status(401).send({ success: false, message: "sorry!, you are not authenticated!" });
    }
  }
}
