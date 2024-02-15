import { AgencyEntity } from "../../../domain/entities/agencyEntity";
import { IAgencyRepo } from "../../../domain/interfaces/repos/agencyRepo";
import { AgencyMapper } from "../mappers/agencyMapper";
import { AgencyConfigModel } from "../sequelize/models/agencyConfigModel";

export class AgencyRepoImpl implements IAgencyRepo {
  async getAllAgencies(): Promise<AgencyEntity[]> {
    const agencies = await AgencyConfigModel.findAll();
    return AgencyMapper.toDomain(agencies);
  }
}
