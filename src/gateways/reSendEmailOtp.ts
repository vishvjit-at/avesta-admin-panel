import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";
import { OtpServiceImpl } from "../infrastructure/utils/otpServideImpl";
import { ReSendOtp } from "../domain/useCases/resendOtp";
import { EmailServiceSesEmailSenderImpl } from "../infrastructure/utils/emailServiceSesEmailSenderImpl";
import { IReSendOtpReqDto } from "../domain/interfaces/dtos/userDto";

export class ReSendEmailOtp {
  send(aParams: IReSendOtpReqDto) {
    const redisImplementation = new SessionStoreRedisImpl();
    const otpServiceImpl = new OtpServiceImpl();
    const emailServiceImpl = new EmailServiceSesEmailSenderImpl();

    const reSendOtpUseCase = new ReSendOtp(redisImplementation, otpServiceImpl, emailServiceImpl);
    return reSendOtpUseCase.execute(aParams.token);
  }
}
