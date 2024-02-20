import { AgencyConfigEntity } from "../../../domain/entities/agencyConfigEntity";


export class AgencyMapper {
  static toDomain(usersFromDb: any[]) {
    const agencies: AgencyConfigEntity[] = [];
    usersFromDb.forEach((data) => {
      const agency = new AgencyConfigEntity({
        id: data.id,
        name: data.name,
        config: JSON.parse(data.agencyConfig),
        email: data.email,
        agencyId:data.agencyId
      });
      agencies.push(agency);
    });
    return agencies;
  }
}
