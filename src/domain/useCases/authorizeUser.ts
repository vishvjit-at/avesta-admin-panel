import { IUserAuthorizationDto } from "../interfaces/dtos/userDto";
import { ISessionStore } from "../interfaces/repos/sessionStore";
import { ITokenService } from "../interfaces/utils/tokenService";

export class AuthorizeUser {
  constructor(public redis: ISessionStore, public tokenService: ITokenService) {}
  async execute(aParams: IUserAuthorizationDto) {
    const data = this.tokenService.getDataFromToken<{ id: number }>(aParams.token);
    if (!data?.id) {
      return false;
    }
    const permissionFromRedis = await this.redis.getData<{ permissions: string[] }>(`permissions-${data?.id}`);
    if (!permissionFromRedis) {
      return false;
    }
    return permissionFromRedis?.permissions.includes(aParams.permission);
  }
}
