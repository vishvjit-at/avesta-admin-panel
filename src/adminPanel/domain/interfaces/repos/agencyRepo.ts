export interface IAgencyConfigDetails {
  id: number;
  name: string;
  probabilityPercentage: number;
  propertyCountPerSuburb: number;
}
export interface IAgencyRepo {
  getAllAgencies(): Promise<IAgencyConfigDetails[]>;
}
