import { IsuburbRepo } from "../../interfaces/repos/suburbRepo";
export class GetSuburbById {
    constructor(private repo: IsuburbRepo) { }

    async execute(id: number) {
        try {
            const suburbResult = await this.repo.getSuburbById(id);
            return suburbResult;
        } catch (error) {
            throw new Error("error");
        }
    }

}
