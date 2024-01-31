import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";
import { EmailServiceImpl } from "../infrastructure/utils/emailServiceImpl";
import { OtpServiceImpl } from "../infrastructure/utils/otpServideImpl";
import { ReSendOtp } from "../domain/useCases/resendOtp";

export class ReSendEmailOtp {
  send(token: string) {
    const redisImplementation = new SessionStoreRedisImpl();
    const otpServiceImpl = new OtpServiceImpl();
    const emailServiceImpl = new EmailServiceImpl();

    const reSendOtpUseCase = new ReSendOtp(redisImplementation, otpServiceImpl, emailServiceImpl);
    return reSendOtpUseCase.execute(token);
  }
}
