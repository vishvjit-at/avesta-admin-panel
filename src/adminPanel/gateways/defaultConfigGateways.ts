import { IDefaultConfigReqDto } from "../domain/interfaces/dtos/defalutConfigDto";
import { GetDefaultConfig } from "../domain/useCases/defaultConfig/getDefaultConfig";
import { UpdateDefaultConfig } from "../domain/useCases/defaultConfig/updateDefaultConfig";
import { DefaultConfigRepoImpl } from "../infrastructure/repository/mysql/defaultConfigRepoImpl";

export class DefaultConfigGateWay{
    defaultConfigRepo:DefaultConfigRepoImpl
    constructor (){
        this.defaultConfigRepo=new DefaultConfigRepoImpl()
    }
    getDefaultConfig(){
        const getDefaultConfig=new GetDefaultConfig(this.defaultConfigRepo)
        return getDefaultConfig.execute()
    }
    updateDefaultConfig(aParams:IDefaultConfigReqDto){
        const updateConfigResponse=new UpdateDefaultConfig(this.defaultConfigRepo)
        return updateConfigResponse.execute(aParams)
    }
}