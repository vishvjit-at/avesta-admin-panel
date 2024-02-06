import { IsuburbRepo } from "../../../domain/interfaces/repos/suburbRepo";
export class GetSuburbsWithPagination{
    constructor(private repo:IsuburbRepo){}
    async execute(pageNumber:number,pageSize:number){
        try {
            const suburbs=await this.repo.getSuburbWithPage(pageNumber,pageSize);
            return  suburbs;
        } catch (error) {
            throw new Error("Error With Pagination")
            
        }
    }
}