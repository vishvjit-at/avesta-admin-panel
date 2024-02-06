import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";
import { IUserAuthorizationDto } from "../domain/interfaces/dtos/userDto";
import { AuthorizeUser } from "../domain/useCases/authorizeUser";
import { TokenServiceImpl } from "../infrastructure/utils/tokenServiceImpl";

export class UserAuthorization {
  authorize(aParams: IUserAuthorizationDto) {
    const redisImplementation = new SessionStoreRedisImpl();
    const tokenServiceImpl = new TokenServiceImpl();

    const sendOtpUseCase = new AuthorizeUser(redisImplementation, tokenServiceImpl);
    return sendOtpUseCase.execute(aParams);
  }
}
