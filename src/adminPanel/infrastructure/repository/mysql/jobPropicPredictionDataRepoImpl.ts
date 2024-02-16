import { IJobPropicPredictionDataRepo } from "../../../domain/interfaces/repos/jobPropicPredictionDataRepo";
import { IJobPropicPredictionData } from "../../../domain/useCases/job/fetchDataAndStoreReports";
import { JobPropicPredictionDataModel } from "../sequelize/models/jobPropicPredictionDataModel";

export class JobPropicPredictionDataRepoImpl implements IJobPropicPredictionDataRepo {
  async insert(properties: IJobPropicPredictionData[]): Promise<void> {
    await JobPropicPredictionDataModel.bulkCreate(properties as any[]);
  }
}
