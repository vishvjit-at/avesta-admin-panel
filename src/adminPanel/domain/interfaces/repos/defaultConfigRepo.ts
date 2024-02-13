export interface IDefaultConfigRepo {
  getConfig(): Promise<string>;
}
