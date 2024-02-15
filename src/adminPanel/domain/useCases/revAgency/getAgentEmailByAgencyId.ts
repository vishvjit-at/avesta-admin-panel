import { IRevReqDto } from "../../interfaces/dtos/revAgencyDto";
import { IRevAgencyRepo } from "../../interfaces/repos/revAgencyRepo";
export class GetAgentEmailByAgencyId{
    constructor (private repo:IRevAgencyRepo){}
    async execute(aParams:IRevReqDto){
        try {
           const agentEmail=await this.repo.getAgentEmailByAgencyId(aParams)
           
           return agentEmail 
        } catch (error) {
            throw new Error("Internal Server Error")
        }
    }
}