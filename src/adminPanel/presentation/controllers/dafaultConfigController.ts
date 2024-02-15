import { NextFunction, Request, Response } from "express";
import { DefaultConfigGateWay } from "../../gateways/defaultConfigGateways";
import { IBodyValidatedRequest } from "../interface/expressRequest.interface";
import { IDefaultConfigReqDto } from "../../../adminPanel/domain/interfaces/dtos/defalutConfigDto";

export class DefaultConfigController{
    public static async getDefaultConfig(req:Request,res:Response,next:NextFunction){
        try {
            const  defaultConfig = await new DefaultConfigGateWay().getDefaultConfig();
            res.json({sucess:true,message:defaultConfig})
        } catch (error) {
            res.status(500).json({ success: false, message: error });
        }
    }

    public static async updateDefaultConfig(req: IBodyValidatedRequest<IDefaultConfigReqDto>,res:Response,next:NextFunction){
        try {
            const updateConfigResponse=await new DefaultConfigGateWay().updateDefaultConfig(req.body)
            res.json({sucess:true,message:updateConfigResponse})
        } catch (error) {
            res.status(500).json({ success: false, message: error });
        }

    }
}