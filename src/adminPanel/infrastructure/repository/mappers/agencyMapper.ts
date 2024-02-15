import { AgencyEntity } from "../../../domain/entities/agencyEntity";
import { AgencyConfigModel } from "../sequelize/models/agencyConfigModel";

export class AgencyMapper {
  static toDomain(usersFromDb: AgencyConfigModel[]) {
    const agencies: AgencyEntity[] = [];
    usersFromDb.forEach((data) => {
      const agency = new AgencyEntity({
        id: data.dataValues.id,
        name: data.dataValues.name,
        config: data.dataValues.config,
        email: data.dataValues.email
      });
      agencies.push(agency);
    });
    return agencies;
  }
}
