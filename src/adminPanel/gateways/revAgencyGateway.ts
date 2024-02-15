import { IRevReqDto } from "../domain/interfaces/dtos/revAgencyDto";
import { GetAgencyByName } from "../domain/useCases/revAgency/getAgencyByName";
import { RevAgencyRepoImpl } from "../infrastructure/repository/mysql/revAgencyRepoImpl";
import { GetAgentEmailByAgencyId } from "../domain/useCases/revAgency/getAgentEmailByAgencyId";
export class RevAgencyGateWay{
    revAgencyRepo:RevAgencyRepoImpl;
    constructor(){
        this.revAgencyRepo=new RevAgencyRepoImpl()
    }

    getAgencyByName(aParams:IRevReqDto){
        const getAgencyByName=new GetAgencyByName(this.revAgencyRepo)
        return getAgencyByName.execute(aParams);
    }

    getAgentEmailByAgencyId(aParams:IRevReqDto){
        const getAgentEmailByAgencyId=new GetAgentEmailByAgencyId(this.revAgencyRepo)
      
        return getAgentEmailByAgencyId.execute(aParams)

    }
}