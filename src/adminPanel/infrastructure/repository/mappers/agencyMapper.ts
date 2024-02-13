import { AgencyEntity } from "../../../domain/entities/agencyEntity";
import { AgencyModel } from "../sequelize/models/agencyModel";

export class AgencyMapper {
  static toDomain(usersFromDb: AgencyModel[]) {
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
