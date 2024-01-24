export interface IRedis {
  isTokenExistInRedis(token: string): Promise<boolean>;
  storeData(key: string, data?: any): Promise<void>;
}
