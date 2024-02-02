import { IVerifyOtpReqDto } from "../../domain/interfaces/dtos/userDto";
import { VerifyOtp } from "../../gateways/verifyOtp";
import { NextFunction, Request, Response } from "express";
import { IBodyValidatedRequest } from "../interface/expressRequest.interface";

export class VerifyOtpController {
  public static async verify(
    req: IBodyValidatedRequest<IVerifyOtpReqDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = await new VerifyOtp().verify(req.body);
      res.json({ success: true, data: { token } });
    } catch (error: any) {
      res.status(401).send({ success: false, message: error.message });
    }
  }
}
