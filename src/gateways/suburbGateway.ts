import { CreateSuburb } from "../domain/useCases/suburb/createSuburb";
import { UpdateSuburbById } from "../domain/useCases/suburb/updateSuburbById";
import { DeleteSuburbById } from "../domain/useCases/suburb/deleteSuburb";
import { GetAllSuburb } from "../domain/useCases/suburb/getAllSuburb";
import { GetSuburbById } from "../domain/useCases/suburb/getSuburbById";
import { SuburbRepoImpl } from "../infrastructure/repository/mysql/suburbRepoImpl";
import {
  ICreateSuburbReqDto,
  IGetPaginationReqDto,
  ISuburbDto,
  ISuburbIdDto
} from "../domain/interfaces/dtos/suburbDto";
import { GetSuburbsWithPagination } from "../domain/useCases/suburb/getSuburbWithPagination";

export class SuburbGateway {
  suburbRepo: SuburbRepoImpl;

  constructor() {
    this.suburbRepo = new SuburbRepoImpl();
  }

  createSuburb(aParams: ICreateSuburbReqDto) {
    const createSuburb = new CreateSuburb(this.suburbRepo);

    return createSuburb.execute(aParams);
  }

  updateSuburbById(suburb: ISuburbDto) {
    const updateSuburb = new UpdateSuburbById(this.suburbRepo);

    return updateSuburb.execute(suburb);
  }
  getAllsuburb() {
    const getAllsuburb = new GetAllSuburb(this.suburbRepo);

    return getAllsuburb.execute();
  }

  getSuburbById(aParams: ISuburbIdDto) {
    const getSuburbById = new GetSuburbById(this.suburbRepo);
    return getSuburbById.execute(aParams);
  }

  deleteSuburbById(aParams: ISuburbIdDto) {
    const deleteSuburbById = new DeleteSuburbById(this.suburbRepo);
    return deleteSuburbById.execute(aParams);
  }

  getSuburbWithPagination(aParams: IGetPaginationReqDto) {
    const getSuburbsWithPagination = new GetSuburbsWithPagination(this.suburbRepo);

    return getSuburbsWithPagination.execute(aParams);
  }
}
