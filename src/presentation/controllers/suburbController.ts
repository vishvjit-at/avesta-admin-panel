import { ISuburbDto } from "../../domain/interfaces/dtos/suburbDto";
import { SuburbGateway } from "../../gateways/suburbGateways";
import { Request,Response } from "express";

export class SuburbController{
    public async getAllSuburb(req:Request,res:Response):Promise<void>{
        try {
            const suburb= await new SuburbGateway().getAllSuburb()
            res.json(suburb)
        } catch (error) {
            console.log(error)
            res.send(error)

        }
    }
    public async getSuburbById(req:Request,res:Response):Promise<void>{
        try {
            const id=req.params.id as unknown as number;
            const suburb=await new SuburbGateway().getSuburbByID(id)
            if(!suburb){
                res.json({
                    msg:"No Suburb Found for id:"+id
                })
            }else{
                res.json(suburb)
            }
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    public async createSuburb(req:Request,res:Response):Promise<void>{
        try {
            const name=req.body.name as string;
            const state=req.body.state as string;
            const postcode=req.body.postcode as number;
            const data:ISuburbDto={
                name,state,postcode
            }
            const  result = await new SuburbGateway().createSuburb(data);
            res.json({
                msg:`${result}`
            })
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    public async deleteSuburbByID(req:Request,res:Response):Promise<void>{
        try {
            const id=req.params.id as unknown as number;
            const suburb=await new SuburbGateway().deleteSuburbByID(id)
            if(!suburb){
                res.json({
                    msg:"No Suburb Found for id:"+id
                })
            }else{
                 res.status(200).json({
                    "Total Rows Affected":suburb,
                    "message":`Data with id ${id} has been deleted`
      
                  })
            }
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    public async updateSuburbById(req:Request,res:Response):Promise<void>{
        try {
            const  id=req.params.id as unknown as number;
            const name=req.body.name as string;
            const state=req.body.state as string;
            const postcode=req.body.postcode as number;
            const data:ISuburbDto={
                name,state,postcode
            }
            const result= await new  SuburbGateway().updateSuburbById(id,data);
            if(!result){
                res.json({
                    msg:"No Suburb Found for id:"+id
                })
            }else{
                 res.status(200).json({
                    "Total Rows Affected":result,
                    "message":`Data with id ${id} has been updated`
      
                  })
            }

            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}