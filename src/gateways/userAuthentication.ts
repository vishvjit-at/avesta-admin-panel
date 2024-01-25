import { IAuthReqDto } from "../domain/interfaces/dtos/userDto";
import { AuthenticateUser } from "../domain/useCases/user/authenticateUser";
import { TokenServiceImpl } from "../infrastructure/utils/tokenServiceImpl";
import { UserRepoImpl } from "../infrastructure/repository/mysql/userRepoImpl";
import { SessionStoreRedisImpl } from "../infrastructure/repository/redis/sessionStoreRedisImpl";

export class UserAuthentication {
  Login(aParams: IAuthReqDto) {
    const iAdminImplementation = new UserRepoImpl();
    const iJwtTokenServiceImplementation = new TokenServiceImpl();
    const iRedisImplementation = new SessionStoreRedisImpl();
    const adminUseCase = new AuthenticateUser(
      iAdminImplementation,
      iJwtTokenServiceImplementation,
      iRedisImplementation
    );
    return adminUseCase.execute(aParams);
  }
}
