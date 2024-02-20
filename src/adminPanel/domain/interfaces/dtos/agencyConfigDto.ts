export interface IAgencyConfigIdDto{
    id:number
} 
export interface IAgencyConfigUpdateDto extends IAgencyConfigIdDto{
email:string,
agencyConfig:string
}

export interface IAgencyConfigDto{
    agencyId:number,
            email:string,
            agencyConfig:string
}

