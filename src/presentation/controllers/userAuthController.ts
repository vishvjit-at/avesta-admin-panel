import { UserAuthentication } from "../../gateways/userAuthentication";
import { NextFunction, Request, Response } from "express";
import { IBodyValidatedRequest } from "../interface/expressRequest.interface";
import { IAuthReqDto } from "../../domain/interfaces/dtos/userDto";

export class UserAuthController {
  public static async userLogin(
    req: IBodyValidatedRequest<IAuthReqDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = await new UserAuthentication().Login(req.body);
      res.json({ success: true, data: token });
    } catch (error: any) {
      res.status(401).send({ success: false, message: error.message });
    }
  }
}
