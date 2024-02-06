import { ISendOtpReqDto } from "../../domain/interfaces/dtos/userDto";
import { UserAuthentication } from "../../gateways/userAuthentication";
import { NextFunction, Response } from "express";
import { IBodyValidatedRequest } from "../interface/expressRequest.interface";

export class UserAuthenticationController {
  public static async send(req: IBodyValidatedRequest<ISendOtpReqDto>, res: Response, next: NextFunction) {
    try {
      const token = await new UserAuthentication().authenticate(req.body);
      res.json({ success: true, data: { token } });
      return;
    } catch (error: any) {
      next(error)
      // res.status(401).send({ success: false, message: error.message });
    }
  }
}
