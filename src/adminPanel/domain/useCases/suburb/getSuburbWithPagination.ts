import { IGetPaginationReqDto } from "../../../domain/interfaces/dtos/suburbDto";
import { ISuburbRepo } from "../../../domain/interfaces/repos/suburbRepo";
export class GetSuburbsWithPagination {
  constructor(private repo: ISuburbRepo) {}
  async execute(aParams: IGetPaginationReqDto) {
    try {
      const suburbs = await this.repo.getSuburbWithPagination(aParams);
      return suburbs;
    } catch (error) {
      throw new Error("Internal server Error");
    }
  }
}
