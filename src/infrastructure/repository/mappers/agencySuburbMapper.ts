import { SuburbEntity } from "../../../domain/entities/suburbEntity";
import { AgencySuburbModel } from "../sequelize/models/agencySuburbModel";

export class AgencySuburbMapper {
  static toDomain(usersFromDb: AgencySuburbModel[]) {
    const suburbs: SuburbEntity[] = [];
    usersFromDb.forEach((data) => {
      const suburb = new SuburbEntity({
        id: data.dataValues.id,
        suburbName: data.dataValues.name,
        postcode: data.dataValues.postcode,
        state: data.dataValues.state
      });
      suburbs.push(suburb);
    });
    return suburbs;
  }
}
