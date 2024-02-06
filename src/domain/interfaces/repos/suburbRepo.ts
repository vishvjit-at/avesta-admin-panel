import { SuburbEntity } from "../../entities/suburbEntity";
import { SuburbModel } from "../../../infrastructure/repository/sequelize/models/suburbModel";

export interface IsuburbRepo {
    getSuburbById(id: number): Promise<SuburbEntity | undefined>;
    deleteSuburbById(id: number): Promise<string | undefined>;
    createSuburb(token:string,suburbDetails: SuburbEntity): Promise<number | undefined|string>;
    getAllSuburb(): Promise<SuburbEntity[]>;
    updateSuburbById(suburbDetails: SuburbEntity): Promise<boolean>;
    isSuburbExist(suburb:SuburbEntity):Promise<boolean>
    getSuburbWithPage(pageNumber:number,pageSize:number):Promise<{ totalPages: number, content: SuburbModel[]}>
}
