export interface ISessionStore {
  isTokenExistInSessionStore(token: string): Promise<boolean>;
  storeData(key: string, timeToLive?: number, data?: any): Promise<void>;
  getData<T>(key: string): Promise<T | undefined>;
  delRecord(key: string): Promise<void>;
}
