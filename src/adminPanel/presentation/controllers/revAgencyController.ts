import { RevAgencyGateWay } from "../../../adminPanel/gateways/revAgencyGateway";
import { IBodyValidatedRequest } from "../interface/expressRequest.interface";
import { IRevReqDto } from "../../../adminPanel/domain/interfaces/dtos/revAgencyDto";
import { Request, Response, NextFunction } from "express";
export class RevAgencyController {
  public static async getAgencyByName(
    req: IBodyValidatedRequest<IRevReqDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const agencyData = await new RevAgencyGateWay().getAgencyByName(req.body);

      res.json({ success: true, message: agencyData });
    } catch (error) {
      res.json({ sucess: false, message: error });
    }
  }

  public static async getAgentsEmailByAgencyName(req:IBodyValidatedRequest<IRevReqDto>,res:Response,next:NextFunction){
    try {
        const agentEmail = await new RevAgencyGateWay().getAgentEmailByAgencyId(req.body)
  
        res.json({ success: true, message: agentEmail });
      } catch (error) {
        res.json({ sucess: false, message: error });
      }
  }
}
