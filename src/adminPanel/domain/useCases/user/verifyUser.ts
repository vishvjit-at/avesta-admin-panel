import { ISessionStore } from "../../interfaces/repos/sessionStore";
import { ITokenService } from "../../interfaces/utils/tokenService";

export class VerifyUser {
  constructor(private tokenService: ITokenService, private redis: ISessionStore) {}

  async execute(token: string) {
    const isTokenValid = this.tokenService.getDataFromToken<{ id: number }>(token);
    if (!isTokenValid || !isTokenValid.id) {
      return false;
    }

    return this.redis.isTokenExistInSessionStore(`session-${isTokenValid.id}`);
  }
}
