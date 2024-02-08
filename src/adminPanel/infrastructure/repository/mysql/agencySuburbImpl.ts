import { IAgencySuburbRepo } from "../../../domain/interfaces/repos/agencySuburbRepo";
import { EStates } from "../../../domain/useCases/suburb/createSuburb";
import { AgencySuburbModel } from "../sequelize/models/agencySuburbModel";

export class AgencySuburbImpl implements IAgencySuburbRepo {
  async getUniqueSuburbs(): Promise<{ id: number; name: string; postcode: string; state: EStates }[]> {
    const data = await AgencySuburbModel.findAll({ group: ["name"], raw: true });
    const suburbs = data[0].dataValues as { id: number; name: string; postcode: string; state: EStates }[];
    return suburbs;
  }
}
