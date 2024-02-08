import { SuburbEntity } from "../../entities/suburbEntity";
import { ISuburbDto } from "../../interfaces/dtos/suburbDto";
import { IsuburbRepo } from "../../interfaces/repos/suburbRepo";
export enum EStates {
  act = "act",
  nsw = "nsw",
  nt = "nt",
  qld = "qld",
  sa = "sa",
  tas = "tas",
  vic = "vic",
  wa = "wa",
  ot = "ot"
}
export class CreateSuburb {
  constructor(private repo: IsuburbRepo) {}
  async execute(token: string, aParmas: ISuburbDto) {
    try {
      const parmas = new SuburbEntity(aParmas);

      let isSuburbExist = await this.repo.isSuburbExist(parmas);

      if (isSuburbExist) {
        throw new Error("This suburb already exist");
      } else {
        let isValidDetails = this.isValidSuburbDetails(aParmas);
        if (!isValidDetails) {
          throw new Error("Invalid Suburb details!!");
        } else {
          const suburbResult = await this.repo.createSuburb(token, parmas);
          return suburbResult;
        }
      }
    } catch (error) {
      return error;
    }
  }

  isValidSuburbDetails(aParams: ISuburbDto): boolean {
    const { suburbName, postcode } = aParams;
    const isvalidSub = SuburbEntity.isSuburbValid(suburbName);
    const isValidPostCode = SuburbEntity.isPostCodeValid(postcode);

    return isvalidSub && isValidPostCode;
  }
}
