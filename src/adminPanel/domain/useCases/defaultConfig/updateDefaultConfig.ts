import { IDefaultConfigReqDto } from "../../interfaces/dtos/defalutConfigDto";
import { IDefaultConfigRepo } from "../../interfaces/repos/defaultConfigRepo";
export class UpdateDefaultConfig{
    constructor(private repo:IDefaultConfigRepo) {}
    async execute(aParams:IDefaultConfigReqDto){
        try {
            const  defaultConfig = await this.repo.updateDafaultConfig(aParams);
           
            return defaultConfig;
        } catch (error) {
            throw new Error("Internal Server Error")
        }
    }
}