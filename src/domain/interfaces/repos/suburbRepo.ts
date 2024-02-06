import { SuburbEntity } from "../../entities/suburbEntity";

export interface IsuburbRepo {
    getSuburbById(id: number): Promise<SuburbEntity | undefined>;
    deleteSuburbById(id: number): Promise<string | undefined>;
    createSuburb(token:string,suburbDetails: SuburbEntity): Promise<number | undefined|string>;
    getAllSuburb(): Promise<SuburbEntity[]>;
    updateSuburbById(suburbDetails: SuburbEntity): Promise<boolean>;
}
