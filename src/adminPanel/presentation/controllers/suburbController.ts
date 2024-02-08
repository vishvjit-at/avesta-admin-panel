import { NextFunction, Request, Response } from "express";
import { SuburbGateway } from "../../gateways/suburbGateway";
import { ISuburbDto } from "../../domain/interfaces/dtos/suburbDto";
export class SuburbController {
  public static async createSuburb(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const suburbName = req.body.suburbName as string;
      const postcode = req.body.postcode as unknown as number;
      const state = req.body.state as string;
      const id = req.body.id as unknown as number;
      const token = req.body.token as string;

      const data: ISuburbDto = {
        suburbName,
        postcode,
        state,
        id
      };
      const suburbCreateResponse = await new SuburbGateway().createSuburb(token, data);
      res.json({ success: true, message: suburbCreateResponse });
    } catch (error: any) {
      next(error);
      res.status(401).send({ success: false, message: error.message });
    }
  }

  public static async updateSuburbById(req: Request, res: Response): Promise<void> {
    try {
      const suburbName = req.body.suburbName as string;
      const postcode = req.body.postcode as unknown as number;
      const state = req.body.state as string;
      const id = req.body.id as unknown as number;

      const data: ISuburbDto = {
        suburbName,
        postcode,
        state,
        id
      };
      const status = await new SuburbGateway().updateSuburbById(data);
      res.status(201).json({ success: true, message: `Data successfully updated status: ${status}` });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  public static async getAllSuburb(req: Request, res: Response): Promise<void> {
    try {
      const suburbs = await new SuburbGateway().getAllsuburb();
      res.status(200).json(suburbs);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  public static async getSuburbById(req: Request, res: Response): Promise<void> {
    try {
      const idParam: string = req.params.id as string;
      const id: number = parseInt(idParam, 10);

      if (isNaN(id)) {
        res.status(400).json({ error: "Invalid id parameter" });
        return;
      }

      const user = await new SuburbGateway().getSuburbById(id);
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  public static async deleteSuburbById(req: Request, res: Response): Promise<void> {
    try {
      const idParam: string = req.params.id as string;
      const id: number = parseInt(idParam, 10);

      if (isNaN(id)) {
        res.status(400).json({ error: "Invalid id parameter" });
        return;
      }

      const user = await new SuburbGateway().deleteSuburbById(id);
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
