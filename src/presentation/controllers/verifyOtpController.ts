import { VerifyOtp } from "../../gateways/verifyOtp";
import { NextFunction, Request, Response } from "express";

export class VerifyOtpController {
  public async verify(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = await new VerifyOtp().verify(req.body.token, Number(req.body.otp));
      res.json({ success: true, data: { token } });
    } catch (error: any) {
      res.status(500).send();
    }
  }
}
