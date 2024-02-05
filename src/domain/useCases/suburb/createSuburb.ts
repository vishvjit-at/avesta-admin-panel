import { SuburbEntity } from "../../entities/suburbEntity";
import { ICreateSuburbDto } from "../../interfaces/dtos/suburbDto";
import { IsuburbRepo } from "../../interfaces/repos/suburbRepo";
export enum EStates {
  act = 'act',
  nsw = 'nsw',
  nt = 'nt',
  qld = 'qld',
  sa = 'sa',
  tas = 'tas',
  vic = 'vic',
  wa = 'wa',
  ot = 'ot'
}
export class CreateSuburb {
  constructor(private repo: IsuburbRepo) {}
  async execute(aParmas: ICreateSuburbDto) {
    try {
        let isValidDetails=this.validateSuburbDetails(aParmas)
      if (!isValidDetails) {
       throw new Error('Invalid Suburb details!!')
      } else {
        const parmas = new SuburbEntity(aParmas);
        const suburbResult = await this.repo.createSuburb(parmas);
        return suburbResult
      }
    } catch (error) {
      console.log(error);
    }
  }

  validateSuburbDetails(aParams: ICreateSuburbDto) {
    const { suburbName: name, postcode, state } = aParams;
    const isvalidSub = SuburbEntity.isSuburbValid(name);
    const isValidPostCode = SuburbEntity.isPostCodeValid(postcode);
    const isValidState = SuburbEntity.isStateValid(state);
    return isvalidSub && isValidPostCode && isValidState
  }
}