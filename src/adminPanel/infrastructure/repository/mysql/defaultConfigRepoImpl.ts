// import { IDefaultConfigRepo } from "../../../domain/interfaces/repos/defaultConfigRepo";
// import { DefaultConfigModel } from "../sequelize/models/defaultConfigModel";

// export class DefaultConfigRepoImpl implements IDefaultConfigRepo {
//   async getConfig(): Promise<string> {
//     const data = await DefaultConfigModel.findAll();

//     return data[0].dataValues;
//   }
// }


import { IDefaultConfigRepo } from "src/adminPanel/domain/interfaces/repos/defaultConfigRepo";
import { DefaultConfigModel } from "../sequelize/models/defaultConfigModel";
import { IDefaultConfigReqDto } from "src/adminPanel/domain/interfaces/dtos/defalutConfigDto";


export class  DefaultConfigRepoImpl implements IDefaultConfigRepo{
   async getDefaultConfig(): Promise<DefaultConfigModel[]|undefined> {
    const defaultConfig=await DefaultConfigModel.findAll();
    if(!defaultConfig){
      return undefined
    }else{
       return defaultConfig;

    }

  }
   async updateDafaultConfig(aParams:IDefaultConfigReqDto): Promise<undefined|number> {
    const updateDefaultConfigResponseFromDb=await DefaultConfigModel.update(
      {
        json: {probabilityPercentage: aParams.probabilityPercentage, propertyCountPerSuburb: aParams.propertyCountPerSUburb},
        bccEmail: aParams.bccEmail,
      },{
        where:{id:1}
      }
    )
   
    if(!updateDefaultConfigResponseFromDb){
      return undefined
    }else{
      
       return updateDefaultConfigResponseFromDb as unknown as number;

    }
  }
}
