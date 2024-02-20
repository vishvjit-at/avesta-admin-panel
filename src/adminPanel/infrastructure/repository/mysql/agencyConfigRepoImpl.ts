import { AgencyConfigEntity } from "../../../../adminPanel/domain/entities/agencyConfigEntity";

import { AgencyConfigModel } from "../sequelize/models/agencyConfigModel";
import { IAgencyConfigRepo } from "../../../../adminPanel/domain/interfaces/repos/agencyConfigRepo";
import { IAgencyConfigDto, IAgencyConfigIdDto, IAgencyConfigUpdateDto } from "../../../domain/interfaces/dtos/agencyConfigDto";

import { AgencyMapper } from "../mappers/agencyMapper";

export class AgencyConfigRepoImpl implements IAgencyConfigRepo{
    async createAgencyConfig(aParams: IAgencyConfigDto): Promise<void> {
      
    const result=  await AgencyConfigModel.create({
            agencyId:aParams.agencyId,
            email:aParams.email,
            agencyConfig:aParams.agencyConfig
        })
        
        return result.dataValues.id
    }

   async  updateAgencyConfigById(aParams: IAgencyConfigUpdateDto): Promise<boolean> {

      const updateAgencyConfigResponse=await AgencyConfigModel.update({
                email:aParams.email,
                agencyConfig:aParams.agencyConfig
      },{
        where:{id:aParams.id}
      })
      if(updateAgencyConfigResponse[0]===0){
        return false
      }else{
        return true
      }
    }
    async deleteAgencyConfigById(aParams: IAgencyConfigIdDto): Promise<boolean> {
      const deleteAgencyConfigResponse=await AgencyConfigModel.destroy({
        where:{
            id:aParams.id
        }
      })
      if(deleteAgencyConfigResponse===0) {
        return false;
      }else {
        return true
      }
    }
     async isAgencyConfigExists(aParams: AgencyConfigEntity): Promise<boolean> {
        let existsAgencyConfig=await AgencyConfigModel.findAll({
            where:{agencyId:aParams.getAgencyId()}
        })
        if(!existsAgencyConfig.length){
            return false
        }else{
            return true
        }
    }
    async getAllAgencyConfig(): Promise<AgencyConfigModel[]|undefined> {
      const getAllAgencyConfig=await AgencyConfigModel.findAll()
      
      if(!getAllAgencyConfig){
        return undefined
      }else{
        return getAllAgencyConfig
      }
    }


    async getAgencyConfigById(aParams:IAgencyConfigIdDto):Promise<undefined|AgencyConfigEntity[]>{
      const getAgencyConfigById=await AgencyConfigModel.findAll({where:{id:aParams.id}})
     
      if(!getAgencyConfigById){
        return undefined
      }
      return AgencyMapper.toDomain(getAgencyConfigById)
     
    }


}