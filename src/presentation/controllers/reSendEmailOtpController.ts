import { ReSendEmailOtp } from "../../gateways/reSendEmailOtp";
import { NextFunction, Request, Response } from "express";

export class ReSendEmailOtpController {
  public async send(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await new ReSendEmailOtp().send(req.body.token);
      res.json({ success: true });
    } catch (error: any) {
      res.status(401).send({ success: false, message: error.message });
    }
  }
}
