import { SuburbEntity } from "../../../domain/entities/suburbEntity";
import { ISuburbRepo } from "../../../domain/interfaces/repos/suburbRepo";
import { SuburbMapper } from "../mappers/surburbMapper";
import { SuburbModel } from "../sequelize/models/suburbModel";

export class SuburbRepositoryImpl implements ISuburbRepo{
  async getAllSuburb(): Promise<SuburbEntity[]> {
        let suburbs= await SuburbModel.findAll()
        return SuburbMapper.toDomain(suburbs) as SuburbEntity[]
    }
     async createSuburb(suburb: SuburbEntity): Promise<number|string> {
        let existsSuburb= await SuburbModel.findAll({where:{postcode:suburb.getPostCode()}})
        if(existsSuburb.length>0){
            return `Suburb Already Exists`
        }else{
            const insertSuburbData=await SuburbModel.create({
                name:suburb.getName(),
                state:suburb.getState(),
                postcode:suburb.getPostCode(),
                id:suburb.getId()
             })
             return insertSuburbData.dataValues.id
        }

        
    }
    async getSuburbByID(id: number): Promise<SuburbEntity | undefined> {
        const suburb =await SuburbModel.findOne({ where: { id } })
        if(!suburb){
            throw new Error("Not Found")
        }else{
          return SuburbMapper.toDomain(suburb) as  SuburbEntity;
           
        }
    }

     async updateSuburbById(id:number,suburb: SuburbEntity): Promise<[number]> {
        const updateSuburbResponeFromDb= await SuburbModel.update(suburb,{where:{id:id}}) 
        return updateSuburbResponeFromDb
    }
    async deleteSuburbByID(id: number): Promise<number> {

        const deleteSuburbResponeFromDb = await SuburbModel.destroy({ where: { id: id} }); 
        return deleteSuburbResponeFromDb
      }

}