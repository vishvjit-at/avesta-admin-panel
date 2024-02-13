import { NextFunction, Response } from "express";
import { ICreateJobDto } from "../../domain/interfaces/dtos/jobDto";
import { IBodyValidatedRequest } from "../interface/expressRequest.interface";
import { FetchDataAndStoreReportsGateway } from "../../gateways/fetchDataAndStoreReportsGateway";

export class CreateJobController {
  public static async send(
    req: IBodyValidatedRequest<ICreateJobDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = await new FetchDataAndStoreReportsGateway().send(req.body);
      res.json({ success: true, data: data });
    } catch (error: any) {
      res.status(401).send({ success: false, message: error.message });
    }
  }
}
