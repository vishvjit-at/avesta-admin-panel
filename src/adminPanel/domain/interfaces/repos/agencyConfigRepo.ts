
import { AgencyConfigModel } from "../../../../adminPanel/infrastructure/repository/sequelize/models/agencyConfigModel";
import { AgencyConfigEntity } from "../../entities/agencyConfigEntity";
import { IAgencyConfigDto, IAgencyConfigIdDto, IAgencyConfigUpdateDto } from "../dtos/agencyConfigDto";

export interface IAgencyConfigRepo{
    createAgencyConfig(aParams:IAgencyConfigDto):Promise<void>
    updateAgencyConfigById( aParams:IAgencyConfigUpdateDto): Promise<boolean>;
    deleteAgencyConfigById(aParams:IAgencyConfigIdDto): Promise<boolean>;
    isAgencyConfigExists(aParams:AgencyConfigEntity):Promise<boolean>
    getAllAgencyConfig():Promise<AgencyConfigModel[]|undefined>;
    getAgencyConfigById(aParams:IAgencyConfigIdDto):Promise<undefined|AgencyConfigEntity[]>
}