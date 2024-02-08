import { IAgencyConfigDetails, IAgencyRepo } from "../../../domain/interfaces/repos/agencyRepo";
import { AgencyMapper } from "../mappers/agencyMapper";
import { AgencyModel } from "../sequelize/models/agencyModel";

export class AgencyRepoImpl implements IAgencyRepo {
  async getAllAgencies(): Promise<IAgencyConfigDetails[]> {
    const agencies = await AgencyModel.findAll();
    return AgencyMapper.toDomain(agencies);
  }
}
