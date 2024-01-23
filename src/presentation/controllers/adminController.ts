import { AuthenticateAdminGateway } from "../../gateways/AuthenticateAdminGateway";
import { NextFunction, Request, Response } from "express";

export class AuthenticateAdminController {
  public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = await new AuthenticateAdminGateway().Login({
        email: req.body.email as string,
        password: req.body.password as string
      });
      res.json({ data: token });
    } catch (error) {
      res.status(401).send();
    }
  }
}
