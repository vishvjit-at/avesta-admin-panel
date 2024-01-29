import { IAuthReqDto } from "../domain/interfaces/dtos/userDto";
import { AuthenticateUser } from "../domain/useCases/user/authenticateUser";
import { TokenServiceImpl } from "../infrastructure/utils/tokenServiceImpl";
import { UserRepoImpl } from "../infrastructure/repository/mysql/userRepoImpl";
import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";

export class UserAuthentication {
  Login(aParams: IAuthReqDto) {
    const iUserRepoImplementation = new UserRepoImpl();
    const iJwtTokenServiceImplementation = new TokenServiceImpl();
    const iRedisImplementation = new SessionStoreRedisImpl();
    const userUseCase = new AuthenticateUser(
      iUserRepoImplementation,
      iJwtTokenServiceImplementation,
      iRedisImplementation
    );
    return userUseCase.execute(aParams);
  }
}
