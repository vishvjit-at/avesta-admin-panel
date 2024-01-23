import { AdminGateway } from "../../gateways/adminGateway";
import { NextFunction, Request, Response } from "express";

export class AdminController {
  public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = await new AdminGateway().Login({
        email: req.body.email as string,
        password: req.body.password as string
      });
      res.json({ data: token });
    } catch (error) {
      res.status(401).send();
    }
  }
}
