export interface ISuburbDto {
  suburbName: string;
  postcode: number;
  state: string;
  id?: number;
}

export interface ICreateSuburbDto extends ISuburbDto {
  token?: string;
}
