import { AgencyConfigEntity } from "../../entities/agencyConfigEntity";

export interface IRevAndClRepo {
  getDataByGnafIds<T>(gnafIds: string[]): Promise<T>;
  getAgenciesAndConfig<T>(): Promise<AgencyConfigEntity[]>;
}
