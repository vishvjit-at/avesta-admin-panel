import { UserRepoImpl } from "../infrastructure/repository/mysql/userRepoImpl";
import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";
import { TokenServiceImpl } from "../infrastructure/utils/tokenServiceImpl";
import { VerifyOtpAndToken } from "../domain/useCases/verifyOtp";

export class VerifyOtp {
  verify(token: string, otp: number) {
    const redisService = new SessionStoreRedisImpl();
    const userRepo = new UserRepoImpl();
    const tokenServiceImpl = new TokenServiceImpl();

    const verifyOtpUseCase = new VerifyOtpAndToken(redisService, userRepo, tokenServiceImpl);

    return verifyOtpUseCase.execute(token, otp);
  }
}
