import { IUserRepo } from "../interfaces/repos/userRepo";
import { ISessionStore } from "../interfaces/repos/sessionStore";
import { ITokenService } from "../interfaces/utils/tokenService";
import { PropicDataSuburbImpl } from "../../infrastructure/utils/propicDataSuburbImpl";

export class VerifyOtpAndToken {
  constructor(public redis: ISessionStore, public repo: IUserRepo, public tokenService: ITokenService) {}
  async execute(token: string, otp: number) {
    const dataFromRedis = await this.redis.getData<{
      otp: string;
      sendOtpAttempt: number;
      verifyOtpAttempt: number;
      email: string;
    }>(token);

    if (!dataFromRedis) {
      throw new Error("Invalid token!!!");
    }

    if (dataFromRedis.verifyOtpAttempt >= 3) {
      throw new Error("Max otp verification attempt reached please try again later!!!!");
    }
    const dataToStoreOnError = {
      otp: dataFromRedis.otp,
      sendOtpAttempt: dataFromRedis.sendOtpAttempt,
      verifyOtpAttempt: dataFromRedis.verifyOtpAttempt + 1,
      email: dataFromRedis.email
    };

    if (Number(dataFromRedis.otp) !== otp) {
      await this.redis.storeData({ key: token, timeToLive: 10 * 60, data: dataToStoreOnError });
      throw new Error("Wrong Otp!!!!");
    }

    const userFromDb = await this.repo.getUserByEmail(dataFromRedis.email);

    if (!userFromDb) {
      await this.redis.storeData({ key: token, timeToLive: 10 * 60, data: dataToStoreOnError });
      throw new Error("Invalid token!!!");
    }

    const [userPermissions] = await Promise.all([
      this.repo.getUserPermissionsById(userFromDb.getId()),
      this.redis.delRecord(token)
    ]);

    await this.redis.storeData({ key: `permissions-${userFromDb.getId()}`, data: { permissions: userPermissions } });
    await this.redis.storeData({ key: `session-${userFromDb.getId()}` });

    const jwtToken = this.tokenService.getToken(userFromDb);

    return jwtToken;
  }
}
