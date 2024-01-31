import { SuburbEntity } from "../../entities/suburbEntity";
import { ISuburbDto } from "../../interfaces/dtos/suburbDto"
import { IsuburbRepo } from "../../interfaces/repos/suburbRepo";

export class CreateSuburb {
    constructor(private repo: IsuburbRepo) { }
    async execute(aParmas: ISuburbDto) {
        try {
            const parmas = new SuburbEntity(aParmas);
            const suburbResult = await this.repo.createSuburb(parmas);
            return suburbResult;
        } catch (error) {
            throw new Error("error");
        }
    }
}