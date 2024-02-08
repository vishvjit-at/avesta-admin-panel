import { EStates } from "../../useCases/suburb/createSuburb";

export interface IAgencySuburbRepo {
  getUniqueSuburbs(): Promise<{ id: number; name: string; postcode: string; state: EStates }[]>;
}
