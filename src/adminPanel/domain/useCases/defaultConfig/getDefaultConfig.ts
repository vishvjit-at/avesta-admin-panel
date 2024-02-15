import { IDefaultConfigRepo } from "../../interfaces/repos/defaultConfigRepo";
export class GetDefaultConfig{
    constructor(private repo:IDefaultConfigRepo) {}
    async execute(){
        try {
            const  defaultConfig = await this.repo.getDefaultConfig();
            return defaultConfig;
        } catch (error) {
            throw new Error("Internal Server Error")
        }
    }
}