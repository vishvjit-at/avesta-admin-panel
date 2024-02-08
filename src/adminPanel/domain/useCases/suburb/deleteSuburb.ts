
import { IsuburbRepo } from "../../interfaces/repos/suburbRepo";
export class DeleteSuburbById {
    constructor(private repo: IsuburbRepo) { }

    async execute(id: number) {
        try {
            const suburbResult = await this.repo.deleteSuburbById(id);
            return suburbResult;
        } catch (error) {
            throw new Error("error");
        }
    }
}