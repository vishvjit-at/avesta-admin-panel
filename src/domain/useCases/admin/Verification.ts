import { IRedis } from "../../interfaces/repos/redis";
import { ITokenService } from "../../interfaces/repos/tokenService";

export class VerifyUser {
  constructor(private tokenService: ITokenService, private redis: IRedis) {}

  async execute(token: string) {
    const isTokenValid = this.tokenService.getDataFromToken<{ id: number }>(token);
    if (!isTokenValid || !isTokenValid.id) {
      return false;
    }

    return this.redis.isTokenExistInRedis(`session-${isTokenValid.id}`);
  }
}
