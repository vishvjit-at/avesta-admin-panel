import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";
import { OtpServiceImpl } from "../infrastructure/utils/otpServideImpl";
import { ReSendOtp } from "../domain/useCases/resendOtp";
import { EmailServiceSesEmailSenderImpl } from "../infrastructure/utils/emailServiceSesEmailSenderImpl";

export class ReSendEmailOtp {
  send(token: string) {
    const redisImplementation = new SessionStoreRedisImpl();
    const otpServiceImpl = new OtpServiceImpl();
    const emailServiceImpl = new EmailServiceSesEmailSenderImpl();

    const reSendOtpUseCase = new ReSendOtp(redisImplementation, otpServiceImpl, emailServiceImpl);
    return reSendOtpUseCase.execute(token);
  }
}
