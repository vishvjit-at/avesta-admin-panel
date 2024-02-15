export interface IDefaultConfigDto{
    id:number,
    json:string,
    bccEmail:string
}
export interface IDefaultConfigReqDto{
    probabilityPercentage?:number,
    propertyCountPerSUburb? :number,
    bccEmail?:string

}