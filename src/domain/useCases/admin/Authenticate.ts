import { IAuthenticationDetails } from "../../interfaces/dtos/adminDto";
import { AdminRepo } from "../../interfaces/repos/authDb";
import { IRedis } from "../../interfaces/repos/redis";
import { ITokenService } from "../../interfaces/repos/tokenService";

export class AuthenticateAdmin {
  constructor(public repo: AdminRepo, public tokenService: ITokenService, public redis: IRedis) {}

  async execute(aParams: IAuthenticationDetails) {
    const adminDetails = await this.repo.getAdminByEmailAndPassword(aParams);

    if (!adminDetails) {
      throw new Error("unauthorized!");
    }

    const key = `session-${adminDetails.getId()}`;

    await this.redis.storeData(key, null);

    const token = this.tokenService.getToken(adminDetails);

    return token;
  }
}
