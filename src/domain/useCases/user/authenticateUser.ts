import { IAuthReqDto } from "../../interfaces/dtos/userDto";
import { IUserRepo } from "../../interfaces/repos/userRepo";
import { ISessionStore } from "../../interfaces/repos/sessionStore";
import { ITokenService } from "../../interfaces/utils/tokenService";

export class AuthenticateUser {
  constructor(public repo: IUserRepo, public tokenService: ITokenService, public redis: ISessionStore) {}

  async execute(aParams: IAuthReqDto) {
    const userDetails = await this.repo.getUserByEmailAndPassword(aParams);

    if (!userDetails) {
      throw new Error("unauthorized!");
    }

    const key = `session-${userDetails.getId()}`;

    await this.redis.storeData(key, 24 * 60 * 60, null);

    const token = this.tokenService.getToken(userDetails);

    return token;
  }
}
