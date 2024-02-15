import { IDefaultConfigDto } from "../interfaces/dtos/defalutConfigDto";

export class DefaultConfigEntity{
    constructor(private defaultConfig:IDefaultConfigDto){}
    getId(): number {
        return this.defaultConfig.id
    }
    getJson():string{
        return this.defaultConfig.json;
    }
    getBccEmail():string{
        return this.defaultConfig.bccEmail
    }
    setId(id:number){
        this.defaultConfig.id=id
    }
    setJson(json:string) {
        this.defaultConfig.json=json
    }
    setBccEmail(email: string) {
        this.defaultConfig.bccEmail=email;
    }
}