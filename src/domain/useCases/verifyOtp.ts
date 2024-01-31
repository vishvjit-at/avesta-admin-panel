import { IUserRepo } from "../interfaces/repos/userRepo";
import { ISessionStore } from "../interfaces/repos/sessionStore";
import { ITokenService } from "../interfaces/utils/tokenService";

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
      await this.redis.storeData(token, 10 * 60, dataToStoreOnError);
      throw new Error("Wrong Otp!!!!");
    }

    const userFromDb = await this.repo.getUserByEmail(dataFromRedis.email);

    if (!userFromDb) {
      await this.redis.storeData(token, 10 * 60, dataToStoreOnError);
      throw new Error("Invalid token!!!");
    }
    await this.redis.delRecord(token);

    const jwtToken = this.tokenService.getToken(userFromDb);

    return jwtToken;
  }
}
