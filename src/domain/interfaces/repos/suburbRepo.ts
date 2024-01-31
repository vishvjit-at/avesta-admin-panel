import { SuburbEntity } from "../../entities/suburbEntity";

export interface ISuburbRepo{
    getAllSuburb():Promise<SuburbEntity[]>
    createSuburb(suburb:SuburbEntity):Promise<number|string>
    deleteSuburbByID(id:number):Promise<number>
    getSuburbByID(id:number):Promise<SuburbEntity|undefined>
    updateSuburbById(id:number,suburb:SuburbEntity):Promise<[number]>
}