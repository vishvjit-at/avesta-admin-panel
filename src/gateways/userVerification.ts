import { VerifyUser } from "../domain/useCases/user/verifyUser";
import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";
import { TokenServiceImpl } from "../infrastructure/utils/tokenServiceImpl";

export class UserVerification {
  verify(token: string) {
    const iJwtTokenServiceImplementation = new TokenServiceImpl();
    const iRedisImplementation = new SessionStoreRedisImpl();
    const iVerifyUser = new VerifyUser(iJwtTokenServiceImplementation, iRedisImplementation);
    return iVerifyUser.execute(token);
  }
}
