import { ICreateJobDto } from "../domain/interfaces/dtos/jobDto";
import { FetchDataAndStoreReports } from "../domain/useCases/job/fetchDataAndStoreReports";
import { JobRepoImpl } from "../infrastructure/repository/mysql/jobRepoImpl";
import { DefaultConfigRepoImpl } from "../infrastructure/repository/mysql/defaultConfigRepoImpl";
import { PropicDataSuburbImpl } from "../infrastructure/utils/propicDataSuburbImpl";
import { RevAndClRepoImpl } from "../infrastructure/repository/mysql/revAndClRepoImpl";
import { JobPropicPredictionDataRepoImpl } from "../infrastructure/repository/mysql/jobPropicPredictionDataRepoImpl";

export class FetchDataAndStoreReportsGateway {
  send(aParams: ICreateJobDto) {
    const jobRepoImpl = new JobRepoImpl();
    const defaultConfigRepoImpl = new DefaultConfigRepoImpl();
    const propicDataSuburbImpl = new PropicDataSuburbImpl();
    const revAndClRepoImpl = new RevAndClRepoImpl();
    const jobPropicPredictionDataRepoImpl = new JobPropicPredictionDataRepoImpl();
    const fetchDataAndStoreReports = new FetchDataAndStoreReports(
      jobRepoImpl,
      defaultConfigRepoImpl,
      propicDataSuburbImpl,
      revAndClRepoImpl,
      jobPropicPredictionDataRepoImpl
    );
    return fetchDataAndStoreReports.execute(aParams);
  }
}
