import { ISuburbRepo } from "../../interfaces/repos/suburbRepo";
export class DeleteSuburbById{
    constructor (private repo:ISuburbRepo){}
    async execute(id:number){
        try {
            const result= await this.repo.deleteSuburbByID(id)
            return result   
        } catch (error) {
            console.log(error);
            throw new Error("Error in Delete");
        }
      
    }
}