import { IRevReqDto } from "../dtos/revAgencyDto";

export interface IRevAndClRepo {
  getDataByGnafIds<T>(gnafIds: string[]): Promise<T>;
  getAgencyByName<T>(aParams: IRevReqDto): Promise<T>;
  getAgentEmailByAgencyId<T>(aParams: IRevReqDto): Promise<T>;
}
