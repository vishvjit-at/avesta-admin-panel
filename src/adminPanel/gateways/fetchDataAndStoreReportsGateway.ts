import { ICreateJobDto } from "../domain/interfaces/dtos/jobDto";
import { FetchDataAndStoreReports } from "../domain/useCases/job/fetchDataAndStoreReports";
import { JobRepoImpl } from "../infrastructure/repository/mysql/jobRepoImpl";
import { AgencyRepoImpl } from "../infrastructure/repository/mysql/agencyRepoImpl";
import { DefaultConfigRepoImpl } from "../infrastructure/repository/mysql/defaultConfigRepoImpl";
import { PropicDataSuburbImpl } from "../infrastructure/utils/propicDataSuburbImpl";

export class FetchDataAndStoreReportsGateway {
  send(aParams: ICreateJobDto) {
    const jobRepoImpl = new JobRepoImpl();
    const agencyRepoImpl = new AgencyRepoImpl();
    const defaultConfigRepoImpl = new DefaultConfigRepoImpl();
    const propicDataSuburbImpl = new PropicDataSuburbImpl();
    const fetchDataAndStoreReports = new FetchDataAndStoreReports(
      jobRepoImpl,
      agencyRepoImpl,
      defaultConfigRepoImpl,
      propicDataSuburbImpl
    );
    return fetchDataAndStoreReports.execute(aParams);
  }
}
