import { NextFunction, Request, Response } from "express";
import { AgencyConfigGateways} from "../../gateways/agencyConfigGateways";
import {
  IAgencyConfigDto,IAgencyConfigIdDto,IAgencyConfigUpdateDto
} from "../../domain/interfaces/dtos/agencyConfigDto";
import {
  IBodyValidatedRequest,
  IQueryValidatedRequest,
  IParamsValidatedRequest
} from "../interface/expressRequest.interface";


export class AgencyConfigController {
  public static async createAgencyConfig(
    req: IBodyValidatedRequest<IAgencyConfigDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const agencyConfigCreateResponse = await new AgencyConfigGateways().createAgencyConfig(req.body);
      res.json({ success: true, data: agencyConfigCreateResponse });
    } catch (error: any) {
      next(error);
    }
  }

  public static async updateAgencyConfigById(req: IBodyValidatedRequest<IAgencyConfigUpdateDto>, res: Response): Promise<void> {
    try {
      await new AgencyConfigGateways().updateAgencyConfigById(req.body);
      res.status(201).json({ success: true});
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  public static async getAllAgencyConfig(req: Request, res: Response): Promise<void> {
    try {
      const agencyConfig = await new AgencyConfigGateways().getAllAgencyConfig()
      res.status(200).json({success:true, data: agencyConfig});
    } catch (error) {
      res.status(500).json({success:false,error: error });
    }
  }

  public static async getAgencyConfigById(req: IParamsValidatedRequest<IAgencyConfigIdDto>, res: Response): Promise<void> {
    try {
      const agencyConfig = await new AgencyConfigGateways().getAgencyConfigById(req.params);
      
      res.status(200).json({success:true, data: agencyConfig});
    } catch (error) {
      res.status(500).json({success:false, error: error });
    }
  }

  public static async deleteAgencyConfigById(req: IParamsValidatedRequest<IAgencyConfigIdDto>, res: Response): Promise<void> {
    try {
       await new AgencyConfigGateways().deleteAgencyConfigById(req.params);
      
      res.status(200).json({success:true});
    } catch (error) {
      res.status(500).json({success:false, error:  "Internal Server Error" });
    }
  }

 
}
