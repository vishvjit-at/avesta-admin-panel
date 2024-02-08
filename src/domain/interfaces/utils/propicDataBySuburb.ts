export interface IPropicDataSuburb {
  getPropertiesWithPagination<T>(aParams: { suburbName: string; state: string; page?: number }): Promise<T[]>;
}
