import { ISuburbRepo } from "../../interfaces/repos/suburbRepo";
export class GetAllSuburb {
    constructor(private repo: ISuburbRepo) { }

    async execute() {
        try {
            const suburbResult = await this.repo.getAllSuburb();
            return suburbResult;
        } catch (error) {
            throw new Error("Internal Server");
        }

    }
}