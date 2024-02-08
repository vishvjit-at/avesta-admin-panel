import { IAgencyConfigDetails } from "../../../domain/interfaces/repos/agencyRepo";
import { AgencyModel } from "../sequelize/models/agencyModel";

export class AgencyMapper {
  static toDomain(usersFromDb: AgencyModel[]) {
    const agencies: IAgencyConfigDetails[] = [];
    usersFromDb.forEach((data) => {
      const agency = {
        id: data.dataValues.id,
        name: data.dataValues.name,
        probabilityPercentage: data.dataValues.probabilityPercentage,
        propertyCountPerSuburb: data.dataValues.propertyCountPerSuburb
      } as IAgencyConfigDetails;
      agencies.push(agency);
    });
    return agencies;
  }
}
