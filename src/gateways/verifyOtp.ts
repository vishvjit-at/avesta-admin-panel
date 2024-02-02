import { UserRepoImpl } from "../infrastructure/repository/mysql/userRepoImpl";
import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";
import { TokenServiceImpl } from "../infrastructure/utils/tokenServiceImpl";
import { VerifyOtpAndToken } from "../domain/useCases/verifyOtp";
import { IVerifyOtpReqDto } from "../domain/interfaces/dtos/userDto";

export class VerifyOtp {
  verify(aParams: IVerifyOtpReqDto) {
    const redisService = new SessionStoreRedisImpl();
    const userRepo = new UserRepoImpl();
    const tokenServiceImpl = new TokenServiceImpl();

    const verifyOtpUseCase = new VerifyOtpAndToken(redisService, userRepo, tokenServiceImpl);

    return verifyOtpUseCase.execute(aParams.token, aParams.otp);
  }
}
