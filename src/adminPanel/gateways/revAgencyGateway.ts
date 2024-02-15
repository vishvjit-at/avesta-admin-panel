import { IRevReqDto } from "../domain/interfaces/dtos/revAgencyDto";
import { GetAgencyByName } from "../domain/useCases/revAgency/getAgencyByName";
import { RevAndClRepoImpl } from "../infrastructure/repository/mysql/revAndClRepoImpl";
import { GetAgentEmailByAgencyId } from "../domain/useCases/revAgency/getAgentEmailByAgencyId";
export class RevAgencyGateWay{
    revAgencyRepo:RevAndClRepoImpl;
    constructor(){
        this.revAgencyRepo=new RevAndClRepoImpl()
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