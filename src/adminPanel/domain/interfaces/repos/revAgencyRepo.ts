import { RevAgencyModel } from "../../../../adminPanel/infrastructure/repository/sequelize/models/revAgencyModel"
import { IRevReqDto } from "../dtos/revAgencyDto"

export interface IRevAgencyRepo{
    getAgencyByName(agency:IRevReqDto) :Promise<undefined|RevAgencyModel[]>
    getAgentEmailByAgencyId(id:IRevReqDto):Promise<undefined|string[]>
}