import { ILoginWithOtpReq } from "../../domain/interfaces/dtos/userDto";
import { SendEmailOtp } from "../../gateways/sendEmailOtp";
import { NextFunction, Response } from "express";
import { IBodyValidatedRequest } from "../expressRequest.interface";

export class SendEmailOtpController {
  public static async send(req: IBodyValidatedRequest<ILoginWithOtpReq>, res: Response, next: NextFunction) {
    try {
      const token = await new SendEmailOtp().send(req.body.email);
      res.json({ success: true, data: { token } });
      return;
    } catch (error: any) {
      res.status(401).send({ success: false, message: error.message });
    }
  }
}
