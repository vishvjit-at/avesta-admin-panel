import { RedisClientType, createClient } from "redis";
import { ISessionStore } from "../../../domain/interfaces/repos/sessionStore";
require("dotenv").config();

export class SessionStoreRedisImpl implements ISessionStore {
  private static clientInstance: RedisClientType;

  public static async getClientInstance(): Promise<RedisClientType> {
    if (!this.clientInstance) {
      const {REDIS_CONNECTION_URL}= process.env
      this.clientInstance = createClient({ url:REDIS_CONNECTION_URL });
      this.clientInstance.on("error", (err) => console.error("Redis Client Error", err));
      await this.clientInstance.connect();
    }
    return this.clientInstance;
  }

  async isTokenExistInSessionStore(token: string) {
    const client = await SessionStoreRedisImpl.getClientInstance();
    const data = await client.exists(token);
    return Boolean(data);
  }

  async storeData(aParams: { key: string; timeToLive?: number; data?: any }): Promise<void> {
    const client = await SessionStoreRedisImpl.getClientInstance();
    let parsedData = "";
    if (aParams.data) {
      parsedData = JSON.stringify(aParams.data);
    }
    await client.set(aParams.key, parsedData, { EX: aParams.timeToLive });
  }
  async getData<T>(key: string): Promise<T | undefined> {
    const client = await SessionStoreRedisImpl.getClientInstance();
    const data = await client.get(key);
    if (!data) {
      return;
    }
    return JSON.parse(data) as T;
  }
  async delRecord(key: string): Promise<void> {
    const client = await SessionStoreRedisImpl.getClientInstance();
    client.del(key);
  }
}
