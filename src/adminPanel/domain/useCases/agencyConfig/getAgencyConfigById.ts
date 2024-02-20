import { IAgencyConfigIdDto } from "../../interfaces/dtos/agencyConfigDto";
import { IAgencyConfigRepo } from "../../interfaces/repos/agencyConfigRepo";

export class GetAgencyConfigById{
    constructor(private repo:IAgencyConfigRepo){}
    async execute(aParams:IAgencyConfigIdDto){
        try {
            const agencyConfigResponse =await this.repo.getAgencyConfigById
            (aParams)
            return agencyConfigResponse
        } catch (error) {
            throw new Error("Internal Server Error");
        }
    }
}