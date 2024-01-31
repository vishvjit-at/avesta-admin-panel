import { ISuburbRepo } from "../../interfaces/repos/suburbRepo";
export class GetAllSuburb{
    constructor(private repo:ISuburbRepo){}
    async execute(){
      
        try {
            const result= await this.repo.getAllSuburb()
            return result
        } catch (error) {
            console.log(error);
            throw new Error ("Error:No Suburb Found")
        }
    }
}