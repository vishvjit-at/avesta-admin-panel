import { IRevReqDto } from "../../interfaces/dtos/revAgencyDto";
import { IRevAndClRepo } from "../../interfaces/repos/revAndClRepo";
export class GetAgencyByName {
  constructor(private repo: IRevAndClRepo) {}
  async execute(aParams: IRevReqDto) {
    try {
      const agencyFound = await this.repo.getAgencyByName(aParams);
      return agencyFound;
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  }
}
