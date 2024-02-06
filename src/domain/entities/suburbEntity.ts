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
  getToken(): string|undefined {
    return this.suburbs.token;
  }

  static isSuburbValid(suburb: string): boolean|string{
    let specialCharacterRegex=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/
   
if(specialCharacterRegex.test(suburb)){
        return 'Special characters are not allowed in the Suburb field.'
      
    }else{
        return true
        
    }
    ;
  }

  static isPostCodeValid(postcode: number): string|boolean {
  
     if(postcode < 1000 || postcode > 9999){
       
        return 'Postcode is not Valid'
    }else {
      
      return true;
    }
  }
  static isStateValid(state: string): boolean|string {
  
    if (!state || (!(state in EStates)) ) {
      
      return "State name is not valid";
    }  else {
      
      return true;
    }
  }
}

