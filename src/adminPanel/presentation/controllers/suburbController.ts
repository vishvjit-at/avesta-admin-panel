import { NextFunction, Request, Response } from "express";
import { SuburbGateway } from "../../gateways/suburbGateway";
import {
  IGetPaginationReqDto,
  ISuburbDto,
  ICreateSuburbReqDto,
  ISuburbIdDto
} from "../../domain/interfaces/dtos/suburbDto";
import {
  IBodyValidatedRequest,
  IQueryValidatedRequest,
  IParamsValidatedRequest
} from "../interface/expressRequest.interface";


export class SuburbController {
  public static async createSuburb(
    req: IBodyValidatedRequest<ICreateSuburbReqDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const suburbCreateResponse = await new SuburbGateway().createSuburb(req.body);
      res.json({ success: true, message: suburbCreateResponse });
    } catch (error: any) {
      next(error);
    }
  }

  public static async updateSuburbById(req: IBodyValidatedRequest<ISuburbDto>, res: Response): Promise<void> {
    try {
      const status = await new SuburbGateway().updateSuburbById(req.body);
      res.status(201).json({ success: true, message: `Data updated status: ${status}` });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  public static async getAllSuburb(req: Request, res: Response): Promise<void> {
    try {
      const suburbs = await new SuburbGateway().getAllsuburb();
      res.status(200).json({success:true, data: suburbs});
    } catch (error) {
      res.status(500).json({success:false,error: error });
    }
  }

  public static async getSuburbById(req: IParamsValidatedRequest<ISuburbIdDto>, res: Response): Promise<void> {
    try {
      const suburb = await new SuburbGateway().getSuburbById(req.params);
      if (!suburb) {
        res.status(404).json({success:false, error: "Suburb not found" });
        return;
      }

      res.status(200).json({success:true ,suburb});
    } catch (error) {
      res.status(500).json({success:false, error: "Internal Server Error" });
    }
  }

  public static async deleteSuburbById(req: IParamsValidatedRequest<ISuburbIdDto>, res: Response): Promise<void> {
    try {
      const suburbResponseFromDb = await new SuburbGateway().deleteSuburbById(req.params);
      if (suburbResponseFromDb==0) {
        res.status(404).json({success:false, error: "Suburb not found" });
        return;
      }

      res.status(200).json({success:true, message: `Total Rows Affected: ${suburbResponseFromDb}`});
    } catch (error) {
      res.status(500).json({success:false, error:  "Internal Server Error" });
    }
  }

  public static async getSuburbsWithPagination(
    req: IQueryValidatedRequest<IGetPaginationReqDto>,
    res: Response
  ): Promise<void> {
    try {
      const suburbs = await new SuburbGateway().getSuburbWithPagination(req.query);

      res.json({ success: true, message: suburbs });
    } catch (error) {
      res.json({ sucess: false, message: error });
    }
  }
}
