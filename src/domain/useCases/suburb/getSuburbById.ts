import { ISuburbRepo } from "../../interfaces/repos/suburbRepo";
export class GetSuburbById{
    constructor(private repo:ISuburbRepo){}
    async execute(id:number){
        try {
            const result=await this.repo.getSuburbByID(id);
            return result
            
        } catch (error) {
            console.log(error)
            throw new Error("Error:Suburb Not Found")
        }
    }
}