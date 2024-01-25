import { IAuthReqDto } from "../../interfaces/dtos/userDto";
import { IUserRepo } from "../../interfaces/repos/userRepo";
import { ISessionStore } from "../../interfaces/repos/sessionStore";
import { ITokenService } from "../../interfaces/utils/tokenService";

export class AuthenticateUser {
  constructor(public repo: IUserRepo, public tokenService: ITokenService, public redis: ISessionStore) {}

  async execute(aParams: IAuthReqDto) {
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
