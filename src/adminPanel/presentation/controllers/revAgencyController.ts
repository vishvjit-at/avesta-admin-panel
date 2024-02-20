import { RevAgencyGateWay } from "../../../adminPanel/gateways/revAgencyGateway";
import { IQueryValidatedRequest } from "../interface/expressRequest.interface";
import { IRevReqDto } from "../../../adminPanel/domain/interfaces/dtos/revAgencyDto";
import { Request, Response, NextFunction } from "express";
export class RevAgencyController {
  public static async getAgencyByName(
    req: IQueryValidatedRequest<IRevReqDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const agencyData = await new RevAgencyGateWay().getAgencyByName(req.query);

      res.json({ success: true, message: agencyData });
    } catch (error) {
      res.json({ sucess: false, message: error });
    }
  }

  public static async getAgentsEmailByAgencyName(req:IQueryValidatedRequest<IRevReqDto>,res:Response,next:NextFunction){
    try {
        const agentEmail = await new RevAgencyGateWay().getAgentEmailByAgencyId(req.query)
  
        res.json({ success: true, message: agentEmail });
      } catch (error) {
        res.json({ sucess: false, message: error });
      }
  }
}
