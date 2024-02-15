import { Op, QueryTypes } from "sequelize";
import { IRevAgencyRepo } from "../../../../adminPanel/domain/interfaces/repos/revAgencyRepo";
import { RevAgencyModel } from "../sequelize/models/revAgencyModel";
import { IRevReqDto } from "src/adminPanel/domain/interfaces/dtos/revAgencyDto";

export class RevAgencyRepoImpl implements IRevAgencyRepo{
  async getAgencyByName(aParams: IRevReqDto): Promise<undefined|RevAgencyModel[]> {
        const responseFromDb=await RevAgencyModel.findAll({
            where:{
                agencyName:{
                    [Op.like]: `%${aParams.agencyName}%`
                }
            },limit:10
        })
        if(!responseFromDb){
            return undefined
        }else{
            return responseFromDb
        }
    }
     async getAgentEmailByAgencyId(aParams:IRevReqDto): Promise<undefined|string[]> {
       const  agentEmail = await RevAgencyModel.sequelize?.query(`SELECT agn.email,ag.id from agencies as ag  JOIN agencyAgents  as age ON ag.id=age.agencyId JOIN agents as agn ON age.agentId= agn.id where ag.id=${aParams.id}`,
       {
         type: QueryTypes.SELECT
         
       })
      
       if(!agentEmail){
        return undefined
       }
       return  agentEmail as unknown as string[] ;
    }
}