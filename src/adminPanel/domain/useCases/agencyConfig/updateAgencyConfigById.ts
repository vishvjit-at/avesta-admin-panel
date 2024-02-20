import {  IAgencyConfigUpdateDto } from "../../interfaces/dtos/agencyConfigDto";
import { IAgencyConfigRepo } from "../../interfaces/repos/agencyConfigRepo";

export class UpdateAgencyConfigById{
    constructor(private repo:IAgencyConfigRepo){}
    async execute(aParams:IAgencyConfigUpdateDto){
        try {
            const agencyConfigResponse =await this.repo.updateAgencyConfigById
            (aParams)
            return agencyConfigResponse
        } catch (error) {
            throw new Error("Internal Server Error");
        }
    }
}