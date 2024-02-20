import { CreateAgencyConfig } from "../domain/useCases/agencyConfig/createAgencyConfig";
import { UpdateAgencyConfigById } from "../domain/useCases/agencyConfig/updateAgencyConfigById";
import { DeleteAgencyConfigById } from "../domain/useCases/agencyConfig/deleteAgencyConfig";
import { AgencyConfigRepoImpl } from "../infrastructure/repository/mysql/agencyConfigRepoImpl";
import { IAgencyConfigDto, IAgencyConfigIdDto, IAgencyConfigUpdateDto } from "../domain/interfaces/dtos/agencyConfigDto";
import { GetAllAgencyConfig } from "../domain/useCases/agencyConfig/getAllAgencyConfig";
import { GetAgencyConfigById } from "../domain/useCases/agencyConfig/getAgencyConfigById";
import { AgencyConfigEntity } from "../domain/entities/agencyConfigEntity";

export class AgencyConfigGateways{
    agencyConfigRepo:AgencyConfigRepoImpl;
    constructor(){
        this.agencyConfigRepo=new AgencyConfigRepoImpl()
    }
    createAgencyConfig(aParams:IAgencyConfigDto){
        const createAgencyConfig=new CreateAgencyConfig(this.agencyConfigRepo)
        return createAgencyConfig.execute(aParams);
    }
    updateAgencyConfigById(aParams:IAgencyConfigUpdateDto){
        const updateAgencyConfig=new UpdateAgencyConfigById(this.agencyConfigRepo)
        return updateAgencyConfig.execute(aParams)
    }
    deleteAgencyConfigById(aParams:IAgencyConfigIdDto){
        const deleteAgencyConfigById=new DeleteAgencyConfigById(this.agencyConfigRepo)
        return deleteAgencyConfigById.execute(aParams)
    }
    getAllAgencyConfig(){ 
        const getAllAgencyConfig=new GetAllAgencyConfig(this.agencyConfigRepo)
        return getAllAgencyConfig.execute()
    }
    getAgencyConfigById(aParams:IAgencyConfigIdDto){
        const getAgencyConfigById=new GetAgencyConfigById(this.agencyConfigRepo)
        return getAgencyConfigById.execute(aParams)
    }
    
}