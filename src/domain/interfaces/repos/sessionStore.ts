export interface ISessionStore {
  isTokenExistInSessionStore(token: string): Promise<boolean>;
  storeData(aParams: { key: string; timeToLive?: number; data?: any }): Promise<void>;
  getData<T>(key: string): Promise<T | undefined>;
  delRecord(key: string): Promise<void>;
}
