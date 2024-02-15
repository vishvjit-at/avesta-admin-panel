export interface IRevAndClRepo {
  getDataByGnafIds<T>(gnafIds: string[]): Promise<T>;
}
