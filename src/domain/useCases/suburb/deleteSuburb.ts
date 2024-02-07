
import { ISuburbIdDto } from "../../../domain/interfaces/dtos/suburbDto";
import { ISuburbRepo } from "../../interfaces/repos/suburbRepo";
export class DeleteSuburbById {
    constructor(private repo: ISuburbRepo) { }

    async execute(aParams: ISuburbIdDto) {
        try {
            const suburbResult = await this.repo.deleteSuburbById(aParams);
            return suburbResult;
        } catch (error) {
            throw new Error("Internal Server Error");
        }
    }
}