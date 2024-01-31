import { SuburbEntity } from "../../entities/suburbEntity";

export interface IsuburbRepo {
    getSuburbById(id: number): Promise<SuburbEntity | undefined>;
    deleteSuburbById(id: number): Promise<string | undefined>;
    createSuburb(suburbDetails: SuburbEntity): Promise<number | undefined>;
    getAllSuburb(): Promise<SuburbEntity[]>;
    updateSuburbById(suburbDetails: SuburbEntity): Promise<boolean>;
}
