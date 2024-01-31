import { ISuburbDto } from "../domain/interfaces/dtos/suburbDto";
import { GetSuburbById } from "../domain/useCases/suburb/getSuburbById";
import { GetAllSuburb} from "../domain/useCases/suburb/getAllSuburb";
import { DeleteSuburbById } from "../domain/useCases/suburb/deleteSuburbById";
import { CreateSuburb} from "../domain/useCases/suburb/createSuburb";
import { UpdateSuburbById } from "../domain/useCases/suburb/updateSuburbById";
import { SuburbRepositoryImpl } from "../infrastructure/repository/mysql/suburbRepoImpl";

export class SuburbGateway{
    suburbRepo:SuburbRepositoryImpl
    constructor(){
        this.suburbRepo=new SuburbRepositoryImpl()
    }

    createSuburb(suburb:ISuburbDto){
        const createSuburb= new CreateSuburb(this.suburbRepo);
        return createSuburb.execute(suburb)
    }
    getAllSuburb(){
        const getSuburb=new GetAllSuburb(this.suburbRepo)
        return getSuburb.execute()
    }
    getSuburbByID(id:number){
        const  getSuburbBYId = new GetSuburbById(this.suburbRepo)
        return getSuburbBYId.execute(id)
    }
    deleteSuburbByID(id:number){
        const deleteSuburbByID=new DeleteSuburbById(this.suburbRepo)
        return deleteSuburbByID.execute(id)
    }
    updateSuburbById(id:number,suburb:ISuburbDto){
        const updateSuburb=new UpdateSuburbById(this.suburbRepo)
        return updateSuburb.execute(id,suburb)
    }
}

