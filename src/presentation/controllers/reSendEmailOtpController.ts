import { ReSendEmailOtp } from "../../gateways/reSendEmailOtp";
import { NextFunction, Request, Response } from "express";

export class ReSendEmailOtpController {
  public async send(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = await new ReSendEmailOtp().send(req.body.token);
      res.json({ success: true });
    } catch (error) {
      res.status(401).send();
    }
  }
}
