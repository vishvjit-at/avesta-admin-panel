import { ISuburbDto } from "../interfaces/dtos/suburbDto";

export class SuburbEntity {
  constructor(private suburbs: ISuburbDto) {}

  getId(): number | undefined {
    return this.suburbs.id;
  }
  getSuburbName(): string {
    return this.suburbs.suburbName;
  }
  getState(): string {
    return this.suburbs.state;
  }
  getPostcode(): string {
    return this.suburbs.postcode;
  }
  setId(id: number) {
    this.suburbs.id = id;
  }
  setSuburbName(name: string) {
    this.suburbs.suburbName = name;
  }
  setState(state: string) {
    this.suburbs.state = state;
  }
  setPostcode(postcode: string) {
    this.suburbs.postcode = postcode;
  }

  static isSuburbValid(suburb: string): boolean {
    let specialCharacterRegex = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~0-9]/;

    if (specialCharacterRegex.test(suburb)) {
      return false;
    } else {
      return true;
    }
  }

  static isPostCodeValid(postcode: string): boolean {
    if (Number(postcode) < 1000 || Number(postcode) > 9999) {
      return false;
    } else {
      return true;
    }
  }
}
