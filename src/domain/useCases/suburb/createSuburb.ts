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
      if (isValidDetails!==true) {
        
       return isValidDetails
      } else {
        const parmas = new SuburbEntity(aParmas);
        const suburbResult = await this.repo.createSuburb(parmas);
        return ` Data succecfully inserted at id:${suburbResult}`;
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
    console.log(isValidPostCode, isvalidSub, isValidState);
    let message;
    if (isvalidSub === true && isValidPostCode === true && isValidState === true) {
      
      return true;
    } else {
     message= `isValidPostCode:${isValidPostCode},isValidState:${isValidState},isvalidSub:${isvalidSub}`;
      return message
     ;
    }
  }
}
