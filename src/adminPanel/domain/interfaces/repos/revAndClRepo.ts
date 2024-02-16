import { IRevReqDto } from "../dtos/revAgencyDto";
import { AgencyConfigEntity } from "../../entities/agencyConfigEntity";

export interface IRevAndClRepo {
  getDataByGnafIds<T>(gnafIds: string[]): Promise<T>;
  getAgenciesAndConfig<T>(): Promise<AgencyConfigEntity[]>;
  getAgencyByName<T>(aParams: IRevReqDto): Promise<T>;
  getAgentEmailByAgencyId<T>(aParams: IRevReqDto): Promise<T>;
}
