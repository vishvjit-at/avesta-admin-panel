import { SuburbEntity } from "../../../domain/entities/suburbEntity";
import { ISuburbDto } from "../../../domain/interfaces/dtos/suburbDto";

export class AgencySuburbMapper {
  static toDomain(usersFromDb: ISuburbDto[]) {
    const suburbs: SuburbEntity[] = [];
    usersFromDb.forEach((data) => {
      const suburb = new SuburbEntity({
        id: data.id,
        suburbName: data.suburbName,
        postcode: data.postcode,
        state: data.state
      });
      suburbs.push(suburb);
    });
    return suburbs;
  }
}
