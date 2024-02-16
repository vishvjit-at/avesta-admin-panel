export interface IDefaultConfigDto {
  id: number;
  json: string;
  bccEmail: string;
}
export interface IDefaultConfigReqDto {
  probabilityPercentage?: number;
  propertyCountPerSuburb?: number;
  bccEmail?: string;
}
