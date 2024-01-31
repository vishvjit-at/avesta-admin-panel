import { SuburbEntity } from "../../../domain/entities/suburbEntity";
import { SuburbModel } from "../sequelize/models/suburbModel";
export class SuburbMapper{
    static toDomain(raw:SuburbModel[]|SuburbModel|null):SuburbEntity[]|SuburbEntity|undefined{
       if(!raw){
        return undefined
       }
       if(Array.isArray(raw)){
        return  raw.map((item)=>this.toSingleDomain(item))
       }else{
           return this.toSingleDomain(raw)
       }

       
    }
    static toSingleDomain(raw?:SuburbModel):SuburbEntity{
        return new SuburbEntity(raw?.dataValues)
    }
}