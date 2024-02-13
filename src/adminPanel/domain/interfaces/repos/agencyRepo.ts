import { AgencyEntity } from "../../entities/agencyEntity";

export interface IAgencyRepo {
  getAllAgencies(): Promise<AgencyEntity[]>;
}
