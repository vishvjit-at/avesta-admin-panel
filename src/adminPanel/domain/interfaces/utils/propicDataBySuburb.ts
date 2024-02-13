export interface IPropicDataSuburb {
  getPropertiesWithPagination<T>(aParams: {
    suburbName: string;
    state: string;
    page?: number;
    postcode: number;
  }): Promise<T>;
}
