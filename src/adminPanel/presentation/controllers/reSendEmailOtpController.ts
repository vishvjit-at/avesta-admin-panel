import { ReSendEmailOtp } from "../../gateways/reSendEmailOtp";
import { NextFunction, Response } from "express";
import { IBodyValidatedRequest } from "../interface/expressRequest.interface";
import { IReSendOtpReqDto } from "../../domain/interfaces/dtos/userDto";

export class ReSendEmailOtpController {
  public static async send(
    req: IBodyValidatedRequest<IReSendOtpReqDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await new ReSendEmailOtp().send(req.body);
      res.json({ success: true });
    } catch (error: any) {
      res.status(401).send({ success: false, message: error.message });
    }
  }
}
