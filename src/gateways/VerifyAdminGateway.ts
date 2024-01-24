import { VerifyUser } from "../domain/useCases/admin/Verification";
import { RedisImplementation } from "../infrastructure/repository/redis/redisImplementation";
import { JwtTokenServiceImplementation } from "../infrastructure/utils/jwtTokenServiceImplementation";

export class VerifyAdminGateway {
  verify(token: string) {
    const iJwtTokenServiceImplementation = new JwtTokenServiceImplementation();
    const iRedisImplementation = new RedisImplementation();
    const iVerifyUser = new VerifyUser(iJwtTokenServiceImplementation, iRedisImplementation);
    return iVerifyUser.execute(token);
  }
}
