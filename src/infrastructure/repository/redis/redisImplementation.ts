import { IRedis } from "../../../domain/interfaces/repos/redis";
import { redisConnection } from "./redisClient";

export class RedisImplementation implements IRedis {
  async isTokenExistInRedis(token: string) {
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
