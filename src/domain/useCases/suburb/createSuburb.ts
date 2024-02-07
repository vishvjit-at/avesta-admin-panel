import { SuburbEntity } from "../../entities/suburbEntity";
import { ICreateSuburbReqDto, ISuburbDto } from "../../interfaces/dtos/suburbDto";
import { ISuburbRepo } from "../../interfaces/repos/suburbRepo";
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
  constructor(private repo: ISuburbRepo) {}
  async execute(aParams:ICreateSuburbReqDto) {
    const parmas = new SuburbEntity({postcode:aParams.postcode,state:aParams.state,suburbName:aParams.suburbName});

    let isSuburbExist = await this.repo.isSuburbExist(parmas);

    if (isSuburbExist) {
      throw new Error("This suburb already exist");
    } else {
      let isValidDetails = this.isValidSuburbDetails(aParams);
      if (!isValidDetails) {
        throw new Error("Invalid Suburb details!!");
      } else {
        const suburbResult = await this.repo.createSuburb(aParams.token, parmas);
        return suburbResult;
      }
    }
  }

  isValidSuburbDetails(aParams: ISuburbDto): boolean {
    const { suburbName, postcode } = aParams;
    const isvalidSub = SuburbEntity.isSuburbValid(suburbName);
    const isValidPostCode = SuburbEntity.isPostCodeValid(postcode);

    return isvalidSub && isValidPostCode;
  }
}
