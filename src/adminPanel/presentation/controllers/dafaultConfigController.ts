import { NextFunction, Request, Response } from "express";
import { DefaultConfigGateWay } from "../../gateways/defaultConfigGateways";
import { IQueryValidatedRequest } from "../interface/expressRequest.interface";
import { IDefaultConfigReqDto } from "../../../adminPanel/domain/interfaces/dtos/defalutConfigDto";

export class DefaultConfigController{
    public static async getDefaultConfig(req:Request,res:Response,next:NextFunction){
        try {
            const  defaultConfig = await new DefaultConfigGateWay().getDefaultConfig();
            res.json({sucess:true,data:defaultConfig})
        } catch (error) {
            res.status(500).json({ success: false, message: error });
        }
    }

    public static async updateDefaultConfig(req: IQueryValidatedRequest<IDefaultConfigReqDto>,res:Response,next:NextFunction){
        try { 
           await new DefaultConfigGateWay().updateDefaultConfig(req.query)
            res.json({success:true})
        } catch (error) {
            res.status(500).json({ success: false, message: error });
        }

    }
}