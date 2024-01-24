import { NextFunction, Request, Response } from "express";
import { VerifyAdminGateway } from "../../gateways/VerifyAdminGateway";

export class AuthMiddleware {
  static async authenticateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const iVerification = new VerifyAdminGateway();

      const isUserValid = await iVerification.verify(req.query.token as string);

      if (!isUserValid) {
        res.status(401).send();
      }

      next();
    } catch (error) {
      res.status(401).send();
    }
  }
}
