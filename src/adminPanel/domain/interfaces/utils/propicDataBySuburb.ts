export interface IPropicDataSuburb {
  getPropertiesWithPagination<T>(aParams: {
    suburbName: string;
    state: string;
    page?: number;
    postcode: string;
  }): Promise<T>;
}
