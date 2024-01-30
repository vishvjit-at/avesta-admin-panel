import { IUserRepo } from "../interfaces/repos/userRepo";
import { ISessionStore } from "../interfaces/repos/sessionStore";
import { IOtpService } from "../interfaces/utils/otpService";
import { IRandomUniqueTokenService } from "../interfaces/utils/randomUniqueTokenService";
import { IEmailService } from "../interfaces/utils/emailService";

export class SendOtp {
  constructor(
    public redis: ISessionStore,
    public otpService: IOtpService,
    public randomUniqueTokenService: IRandomUniqueTokenService,
    public repo: IUserRepo,
    public emailService: IEmailService
  ) {}
  async execute(email: string) {
    const user = await this.repo.getUserByEmail(email);
    if (!user) {
      throw Error("Not Authorized!");
    }

    const otp = this.otpService.getOtp();
    const token = this.randomUniqueTokenService.getToken();
    const emailBody = this.getEmailBody(otp);
    await Promise.all([
      this.storeOtpDetailsInRedis({ email: user.getEmail(), otp, token }),
      this.emailService.sendEmail({
        body: emailBody,
        emailFrom: "vishvjitsinh797@gmail.com",
        emailTo: user.getEmail(),
        subject: "Admin-panel login otp"
      })
    ]);
    return token;
  }

  private async storeOtpDetailsInRedis(params: { otp: string; token: string; email: string }) {
    const data = {
      otp: params.otp,
      sendOtpAttempt: 1,
      verifyOtpAttempt: 0,
      email: params.email
    };

    await this.redis.storeData(params.token, 10 * 60, data);
  }
  private getEmailBody(otp: string) {
    return `<strong>Your otp for logging in :</strong>
    <div>${otp}</div>`;
  }
}
