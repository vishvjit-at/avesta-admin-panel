import { VerifyUser } from "../domain/useCases/user/verifyUser";
import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";
import { TokenServiceImpl } from "../infrastructure/utils/tokenServiceImpl";

export class UserVerification {
  verify(token: string) {
    const jwtTokenServiceImplementation = new TokenServiceImpl();
    const redisImplementation = new SessionStoreRedisImpl();
    const verifyUser = new VerifyUser(jwtTokenServiceImplementation, redisImplementation);
    return verifyUser.execute(token);
  }
}
