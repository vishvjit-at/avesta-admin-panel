import { IAuthReqDto } from "../domain/interfaces/dtos/userDto";
import { AuthenticateUser } from "../domain/useCases/user/authenticateUser";
import { TokenServiceImpl } from "../infrastructure/utils/tokenServiceImpl";
import { UserRepoImpl } from "../infrastructure/repository/mysql/userRepoImpl";
import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";

export class UserAuthentication {
  Login(aParams: IAuthReqDto) {
    const userRepoImplementation = new UserRepoImpl();
    const jwtTokenServiceImplementation = new TokenServiceImpl();
    const redisImplementation = new SessionStoreRedisImpl();
    const userUseCase = new AuthenticateUser(
      userRepoImplementation,
      jwtTokenServiceImplementation,
      redisImplementation
    );
    return userUseCase.execute(aParams);
  }
}
