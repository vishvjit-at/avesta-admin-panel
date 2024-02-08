require("dotenv").config();
import { IEmailService } from "../../domain/interfaces/utils/emailService";
import sgMail from "@sendgrid/mail";

export class EmailServiceSendGridImpl implements IEmailService {
  async send(params: { emailTo: string; emailFrom: string; body: string; subject?: string }): Promise<void> {
    try {
      const apiKey = process.env.SEND_GRID_EMAIL_KEY as string;
      sgMail.setApiKey(apiKey);
      await sgMail.send({ from: params.emailFrom, to: params.emailTo, html: params.body, subject: params.subject });
    } catch (error: any) {
      throw new Error(error?.message);
    }
  }
}
