import { AgencyEntity } from "../../../domain/entities/agencyEntity";
import { IAgencyRepo } from "../../../domain/interfaces/repos/agencyRepo";
import { AgencyMapper } from "../mappers/agencyMapper";
import { AgencyModel } from "../sequelize/models/agencyModel";

export class AgencyRepoImpl implements IAgencyRepo {
  async getAllAgencies(): Promise<AgencyEntity[]> {
    const agencies = await AgencyModel.findAll();
    return AgencyMapper.toDomain(agencies);
  }
}
