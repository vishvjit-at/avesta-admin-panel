import { SuburbEntity } from "../../entities/suburbEntity";
import { SuburbModel } from "../../../infrastructure/repository/sequelize/models/suburbModel";
import { IGetPaginationReqDto, ISuburbIdDto } from "../dtos/suburbDto";

export interface ISuburbRepo {
    getSuburbById(aParams: ISuburbIdDto): Promise<SuburbEntity | undefined>;
    deleteSuburbById(aParams: ISuburbIdDto): Promise<number | undefined>;
    createSuburb(token:string,suburbDetails: SuburbEntity):Promise<void>;
    getAllSuburb(): Promise<SuburbEntity[]>;
    updateSuburbById(suburbDetails: SuburbEntity): Promise<boolean>;
    isSuburbExist(suburb:SuburbEntity):Promise<boolean>
    getSuburbWithPagination(aParams:IGetPaginationReqDto):Promise<{ total: number|undefined, data: SuburbModel[]|string[]}>
}
