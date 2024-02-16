import { IJobPropicPredictionData } from "../../useCases/job/fetchDataAndStoreReports";

export interface IJobPropicPredictionDataRepo {
  insert(properties: IJobPropicPredictionData[]): Promise<void>;
}
