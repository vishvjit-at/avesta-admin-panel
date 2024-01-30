import { ISessionStore } from "../interfaces/repos/sessionStore";
import { IOtpService } from "../interfaces/utils/otpService";
import { IEmailService } from "../interfaces/utils/emailService";

export class ReSendOtp {
  constructor(public redis: ISessionStore, public otpService: IOtpService, public emailService: IEmailService) {}
  async execute(token: string) {
    const dataFromRedis = await this.redis.getData<{
      otp: string;
      sendOtpAttempt: number;
      verifyOtpAttempt: number;
      email: string;
    }>(token);

    if (!dataFromRedis) {
      throw new Error("Invalid token!!!");
    }
    if (dataFromRedis.sendOtpAttempt >= 3) {
      throw new Error("Max otp send attempt reached please try again later!!!!");
    }

    const otp = this.otpService.getOtp();

    const body = this.getEmailBody(otp);

    await Promise.all([
      this.redis.storeData(token, 10 * 60, {
        ...dataFromRedis,
        otp: otp,
        sendOtpAttempt: dataFromRedis.sendOtpAttempt + 1
      }),
      this.emailService.sendEmail({
        body: body,
        emailFrom: "vishvjitsinh797@gmail.com",
        emailTo: dataFromRedis.email,
        subject: "Admin-panel login otp"
      })
    ]);
  }

  private getEmailBody(otp: string) {
    return `<strong>Your otp for logging in :</strong>
    <div>${otp}</div>`;
  }
}
