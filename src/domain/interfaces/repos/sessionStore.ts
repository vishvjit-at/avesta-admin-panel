export interface ISessionStore {
  isTokenExistInSessionStore(token: string): Promise<boolean>;
  storeData(key: string, data?: any): Promise<void>;
}
