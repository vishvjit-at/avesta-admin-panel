import { IsuburbRepo } from "../../interfaces/repos/suburbRepo";
export class GetAllSuburb {
    constructor(private repo: IsuburbRepo) { }

    async execute() {
        try {
            const suburbResult = await this.repo.getAllSuburb();
            return suburbResult;
        } catch (error) {
            throw new Error("error");
        }

    }
}