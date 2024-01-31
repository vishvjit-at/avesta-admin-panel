import { Request, Response } from "express";
import { SuburbGateway } from "../../gateways/suburbGateway";
import { ISuburbDto } from "src/domain/interfaces/dtos/suburbDto";
export class SuburbController {
    public async createSuburb(req: Request, res: Response): Promise<void> {
        try {
            const name = req.body.name as string;
            const postcode = req.body.postcode as unknown as number;
            const state = req.body.state as string;
            const id = req.body.id as unknown as number;

            const data: ISuburbDto = {
                name,
                postcode,
                state,
                id
            }
            const suburbId = await new SuburbGateway().createSuburb(data);
            res.status(201).json({ message: `Data successfully added at ID: ${suburbId}` });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }

    }

    public async updateSuburbById(req: Request, res: Response): Promise<void> {
        try {
            const name = req.body.name as string;
            const postcode = req.body.postcode as unknown as number;
            const state = req.body.state as string;
            const id = req.body.id as unknown as number;

            const data: ISuburbDto = {
                name,
                postcode,
                state,
                id
            }
            const status = await new SuburbGateway().updateSuburbById(data);
            res.status(201).json({ message: `Data successfully updated status: ${status}` });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }

    }


    public async getAllSuburb(req: Request, res: Response): Promise<void> {
        try {
            const suburbs = await new SuburbGateway().getAllsuburb();
            res.status(200).json(suburbs);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }

    public async getSuburbById(req: Request, res: Response): Promise<void> {
        try {
            const idParam: string = req.params.id as string;
            const id: number = parseInt(idParam, 10);

            if (isNaN(id)) {
                console.log(typeof (id));

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
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    public async deleteSuburbById(req: Request, res: Response): Promise<void> {
        try {
            const idParam: string = req.params.id as string;
            const id: number = parseInt(idParam, 10);

            if (isNaN(id)) {
                console.log(typeof (id));

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
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}