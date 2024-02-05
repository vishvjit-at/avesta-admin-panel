import {ICreateSuburbDto } from "../interfaces/dtos/suburbDto";
import { EStates } from "../useCases/suburb/createSuburb";

export class SuburbEntity {
  constructor(private suburbs: ICreateSuburbDto) {}

  getId(): number | undefined {
    return this.suburbs.id;
  }
  getName(): string {
    return this.suburbs.suburbName;
  }
  getState(): string {
    return this.suburbs.state;
  }
  getPostcode(): number {
    return this.suburbs.postcode;
  }
  setId(id: number) {
    this.suburbs.id = id;
  }
  setName(name: string) {
    this.suburbs.suburbName = name;
  }
  setState(state: string) {
    this.suburbs.state = state;
  }
  setPostcode(postcode: number) {
    this.suburbs.postcode = postcode;
  }
  getToken():any {
    return this.suburbs.token;
  }
 

  static isSuburbValid(suburb: string): boolean{
    let specialCharacterRegex=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/
   
if(specialCharacterRegex.test(suburb)){
        return false
      
    }else{
        return true
        
    }
    ;
  }

  static isPostCodeValid(postcode: number): boolean {
  
     if(postcode < 1000 || postcode > 9999){
       
        return false
    }else {
      
      return true;
    }
  }
  static isStateValid(state: string): boolean {
  
    if (!state || (!(state in EStates)) ) {
     return false
    }  else {
      
      return true;
    }
  }
}
