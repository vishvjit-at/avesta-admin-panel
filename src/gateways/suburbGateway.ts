import { CreateSuburb } from "../domain/useCases/suburb/createSuburb";
import { UpdateSuburbById } from "../domain/useCases/suburb/updateSuburbById";
import { DeleteSuburbById } from "../domain/useCases/suburb/deleteSuburb";
import { GetAllSuburb } from "../domain/useCases/suburb/getAllSuburb";
import { GetSuburbById } from "../domain/useCases/suburb/getSuburbById";
import { SuburbRepoImplementation } from "../infrastructure/repository/mysql/suburbRepo";
import { ISuburbDto,ICreateSuburbDto } from "../domain/interfaces/dtos/suburbDto"

export class SuburbGateway {
    suburbRepo: SuburbRepoImplementation;

    constructor() {
        this.suburbRepo = new SuburbRepoImplementation();
    }

    createSuburb(suburb: ICreateSuburbDto) {
        const createSuburb = new CreateSuburb(this.suburbRepo);

        return createSuburb.execute(suburb);

    }

    updateSuburbById(suburb: ICreateSuburbDto) {
        const updateSuburb = new UpdateSuburbById(this.suburbRepo);

        return updateSuburb.execute(suburb);

    }
    getAllsuburb() {
        const getAllsuburb = new GetAllSuburb(this.suburbRepo);

        return getAllsuburb.execute();
    }

    getSuburbById(id: number) {
        const getSuburbById = new GetSuburbById(this.suburbRepo);
        return getSuburbById.execute(id);
    }

    deleteSuburbById(id: number) {
        const deleteSuburbById = new DeleteSuburbById(this.suburbRepo);
        return deleteSuburbById.execute(id);
    }
}