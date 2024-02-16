import { IRevReqDto } from "../../interfaces/dtos/revAgencyDto";
import { IRevAndClRepo } from "../../interfaces/repos/revAndClRepo";
export class GetAgentEmailByAgencyId {
  constructor(private repo: IRevAndClRepo) {}
  async execute(aParams: IRevReqDto) {
    try {
      const agentEmail = await this.repo.getAgentEmailByAgencyId(aParams);

      return agentEmail;
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  }
}
