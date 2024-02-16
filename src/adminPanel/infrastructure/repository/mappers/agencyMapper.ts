import { AgencyConfigEntity } from "../../../domain/entities/agencyConfigEntity";
import { AgencyConfigModel } from "../sequelize/models/agencyConfigModel";

export class AgencyMapper {
  static toDomain(usersFromDb: any[]) {
    const agencies: AgencyConfigEntity[] = [];
    usersFromDb.forEach((data) => {
      const agency = new AgencyConfigEntity({
        id: data.id,
        name: data.name,
        config: data.agencyConfig,
        email: data.email,
        agencyId: data.agencyId
      });
      agencies.push(agency);
    });
    return agencies;
  }
}
