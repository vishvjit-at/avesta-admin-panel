import { SuburbEntity } from "../../entities/suburbEntity";
import { ISuburbDto } from "../../interfaces/dtos/suburbDto";
import { ISuburbRepo } from "../../interfaces/repos/suburbRepo";

export class CreateSuburb{
    constructor(private repo:ISuburbRepo){}
    async execute(suburbParams:ISuburbDto){
        try {
            const params=new SuburbEntity(suburbParams)
            const result =await this.repo.createSuburb(params)
            return result
            
        } catch (error) {
            console.log(error);
            throw new Error("Error")
        }
    }
}