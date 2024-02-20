import { AgencyConfigEntity } from "../../entities/agencyConfigEntity";
import { IAgencyConfigDto } from "../../interfaces/dtos/agencyConfigDto";

import { IAgencyConfigRepo } from "../../interfaces/repos/agencyConfigRepo";
export class CreateAgencyConfig{
    constructor (private repo:IAgencyConfigRepo){}
    async execute(aParams:IAgencyConfigDto){
        try {
            const agencyConfigResponse =await this.repo.createAgencyConfig(aParams)
            return agencyConfigResponse
        } catch (error) {
            throw new Error("Internal Server Error");
        }
    }
}