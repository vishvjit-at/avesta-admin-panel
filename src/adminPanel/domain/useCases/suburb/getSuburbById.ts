import { ISuburbIdDto } from "../../../domain/interfaces/dtos/suburbDto";
import { ISuburbRepo } from "../../interfaces/repos/suburbRepo";
export class GetSuburbById {
  constructor(private repo: ISuburbRepo) {}

  async execute(aParams: ISuburbIdDto) {
    try {
      const suburbResult = await this.repo.getSuburbById(aParams);
      return suburbResult;
    } catch (error) {
      throw new Error("error");
    }
  }
}
