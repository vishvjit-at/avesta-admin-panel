import { SuburbEntity } from "../../entities/suburbEntity";
import { ICreateSuburbDto, ISuburbDto } from "../../interfaces/dtos/suburbDto"
import { IsuburbRepo } from "../../interfaces/repos/suburbRepo";

export class UpdateSuburbById {
    constructor(private repo: IsuburbRepo) { }

    async execute(aParmas: ISuburbDto) {
        try {
            const parmas = new SuburbEntity(aParmas);
            const suburbResult = await this.repo.updateSuburbById(parmas);
            return suburbResult;
        } catch (error) {
            throw new Error("error");
        }
    }
}