import { ISuburbRepo } from "../../interfaces/repos/suburbRepo";
import { ISuburbDto } from "../../interfaces/dtos/suburbDto";
import { SuburbEntity } from "../../entities/suburbEntity";

export class UpdateSuburbById{
    constructor(private repo:ISuburbRepo){}
    async execute(id:number,suburbParams:ISuburbDto){
     try {
        const params=new SuburbEntity(suburbParams)
        const result=await this.repo.updateSuburbById(id,params)
        return result
     } catch (error) {
        console.log(error)
        throw new Error("Error in Update")
     }
    }
}