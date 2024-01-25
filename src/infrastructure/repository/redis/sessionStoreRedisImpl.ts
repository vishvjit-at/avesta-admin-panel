import { ISessionStore } from "../../../domain/interfaces/repos/sessionStore";
import { redisConnection } from "./redisClient";

export class SessionStoreRedisImpl implements ISessionStore {
  async isTokenExistInSessionStore(token: string) {
    await redisConnection.connect();
    const data = await redisConnection.exists(token);
    redisConnection.disconnect();
    return Boolean(data);
  }

  async storeData(key: string, data?: any): Promise<void> {
    await redisConnection.connect();
    let parsedData = "";
    if (data) {
      parsedData = JSON.stringify(data);
    }
    await redisConnection.set(key, parsedData, { EX: 24 * 60 * 60 });
    redisConnection.disconnect();
  }
}
