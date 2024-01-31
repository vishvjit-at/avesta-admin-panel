import { SendEmailOtp } from "../../gateways/sendEmailOtp";
import { NextFunction, Request, Response } from "express";

export class SendEmailOtpController {
  public async send(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = await new SendEmailOtp().send(req.body.email);
      res.json({ success: true, data: { token } });
    } catch (error) {
      res.status(401).send();
    }
  }
}
