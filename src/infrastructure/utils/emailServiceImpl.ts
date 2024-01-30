require("dotenv").config();
import { IEmailService } from "../../domain/interfaces/utils/emailService";
import sgMail from "@sendgrid/mail";

export class EmailServiceImpl implements IEmailService {
  async sendEmail(params: { emailTo: string; emailFrom: string; body: string; subject?: string }): Promise<void> {
    try {
      const apiKey = process.env.SEND_GRID_EMAIL_KEY as string;
      sgMail.setApiKey(apiKey);
      console.log("");
      await sgMail.send({ from: params.emailFrom, to: params.emailTo, html: params.body, subject: params.subject });
    } catch (error: any) {
      throw new Error(error?.message);
    }
  }
}
