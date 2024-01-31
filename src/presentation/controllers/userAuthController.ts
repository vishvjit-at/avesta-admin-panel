import { UserAuthentication } from "../../gateways/userAuthentication";
import { NextFunction, Request, Response } from "express";

export class UserAuthController {
  public async userLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = await new UserAuthentication().Login({
        email: req.body.email as string,
        password: req.body.password as string
      });
      res.json({ success: true, data: token });
    } catch (error: any) {
      res.status(401).send({ success: false, message: error.message });
    }
  }
}
