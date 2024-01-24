import { IAuthenticationDetails } from "../domain/interfaces/dtos/adminDto";
import { AuthenticateAdmin } from "../domain/useCases/admin/Authenticate";
import { JwtTokenServiceImplementation } from "../infrastructure/utils/jwtTokenServiceImplementation";
import { AdminImplementation } from "../infrastructure/repository/mysql/adminImplementation";
import { RedisImplementation } from "../infrastructure/repository/redis/redisImplementation";

export class AuthenticateAdminGateway {
  Login(aParams: IAuthenticationDetails) {
    const iAdminImplementation = new AdminImplementation();
    const iJwtTokenServiceImplementation = new JwtTokenServiceImplementation();
    const iRedisImplementation = new RedisImplementation();
    const adminUseCase = new AuthenticateAdmin(
      iAdminImplementation,
      iJwtTokenServiceImplementation,
      iRedisImplementation
    );
    return adminUseCase.execute(aParams);
  }
}
