import { AuthenticateUser } from "../domain/useCases/authenticateUser";
import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";
import { OtpServiceImpl } from "../infrastructure/utils/otpServideImpl";
import { RandomUniqueTokenServiceImpl } from "../infrastructure/utils/randomUniqueTokenServiceImpl";
import { UserRepoImpl } from "../infrastructure/repository/mysql/userRepoImpl";
import { EmailServiceSesEmailSenderImpl } from "../infrastructure/utils/emailServiceSesEmailSenderImpl";
import { ISendOtpReqDto } from "../domain/interfaces/dtos/userDto";

export class UserAuthentication {
  authenticate(aParams: ISendOtpReqDto) {
    const redisImplementation = new SessionStoreRedisImpl();
    const otpServiceImpl = new OtpServiceImpl();
    const randomUniqueTokenServiceImpl = new RandomUniqueTokenServiceImpl();
    const emailServiceImpl = new EmailServiceSesEmailSenderImpl();
    const userRepo = new UserRepoImpl();

    const sendOtpUseCase = new AuthenticateUser(
      redisImplementation,
      otpServiceImpl,
      randomUniqueTokenServiceImpl,
      userRepo,
      emailServiceImpl
    );
    return sendOtpUseCase.execute(aParams.email);
  }
}
