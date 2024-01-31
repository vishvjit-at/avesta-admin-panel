import { ISuburbDto } from "../interfaces/dtos/suburbDto";
export class SuburbEntity{
   
    constructor(private suburb:ISuburbDto){}
    getName():string{
        return this.suburb.name;
    }

    getState():string{
        return this.suburb.state
    }

    getPostCode():number{
        return this.suburb.postcode
    }
    getId():number|undefined{
        return this.suburb.id;
    }
    setName(name:string){
        this.suburb.name=name
    }
    setState(state:string){
        this.suburb.state=state
    }
    setPostCode(postcode:number){
        this.suburb.postcode=postcode
    }
    setId(id:number){
        this.suburb.id = id
    }
}