import { IRevReqDto } from "../../interfaces/dtos/revAgencyDto";
import { IRevAgencyRepo } from "../../interfaces/repos/revAgencyRepo";
export class GetAgencyByName{
    constructor (private repo:IRevAgencyRepo){}
    async execute(aParams:IRevReqDto){
        try {
            const agencyFound=await this.repo.getAgencyByName(aParams)
            return  agencyFound
        } catch (error) {
            throw new Error("Internal Server Error")
        }
    }

}