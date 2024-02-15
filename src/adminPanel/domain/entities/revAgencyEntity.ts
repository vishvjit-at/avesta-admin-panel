export class RevAngecyEntity{
    constructor(private id :number,private agencyName:string){}
    getId():number{
        return this.id
    }
    getAgencyName():string{
        return this.agencyName
    }
    setAgencyName(agency:string){
        this.agencyName=agency
    }
    setId(id:number){
        this.id=id
    }
}