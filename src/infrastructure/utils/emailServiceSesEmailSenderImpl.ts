require("dotenv").config();
import { createTransport } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { IEmailService } from "../../domain/interfaces/utils/emailService";
import Mail from "nodemailer/lib/mailer";

export class EmailServiceSesEmailSenderImpl implements IEmailService {
  async send(params: {
    emailTo: string;
    emailFrom: string;
    body: string;
    subject?: string | undefined;
  }): Promise<void> {
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      secureConnection: false,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_AUTH_USER_NAME,
        pass: process.env.SMTP_AUTH_PASSWORD
      },
      tls: { ciphers: "SSLv3" }
    } as SMTPTransport.Options);
    const mailOptions: Mail.Options = {
      from: params.emailFrom,
      to: params.emailTo,
      subject: params.subject,
      html: `${params.body}`
    };
    await transporter.sendMail(mailOptions);
  }
}
