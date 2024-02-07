import { SuburbEntity } from "../../entities/suburbEntity";
import {  ISuburbDto } from "../../interfaces/dtos/suburbDto"
import { ISuburbRepo } from "../../interfaces/repos/suburbRepo";

export class UpdateSuburbById {
    constructor(private repo: ISuburbRepo) { }

    async execute(aParmas: ISuburbDto) {
        try {
            const parmas = new SuburbEntity(aParmas);
            const suburbResult = await this.repo.updateSuburbById(parmas);
            return suburbResult;
        } catch (error) {
            throw new Error("Internal Server Error");
        }
    }
}
