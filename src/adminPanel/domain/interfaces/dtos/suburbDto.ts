export interface ISuburbIdDto {
  id?: number;
}
export interface ISuburbDto extends ISuburbIdDto {
  suburbName: string;
  postcode: string;
  state: string;
}

export interface IGetPaginationReqDto {
  page: number;
  size: number;
}

export interface ICreateSuburbReqDto extends ISuburbDto {
  token: string;
}
