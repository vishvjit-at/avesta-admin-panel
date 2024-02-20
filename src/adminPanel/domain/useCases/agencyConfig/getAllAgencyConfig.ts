
import { IAgencyConfigRepo } from "../../interfaces/repos/agencyConfigRepo";

export class GetAllAgencyConfig{
    constructor(private repo:IAgencyConfigRepo){}
    async execute(){
        try {
            const agencyConfigResponse =await this.repo.getAllAgencyConfig()
           
            return agencyConfigResponse
        } catch (error) {
            throw new Error("Internal Server Error");
        }
    }
}