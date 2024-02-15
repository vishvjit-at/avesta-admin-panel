import { ICreateJobDto } from "../domain/interfaces/dtos/jobDto";
import { FetchDataAndStoreReports } from "../domain/useCases/job/fetchDataAndStoreReports";
import { JobRepoImpl } from "../infrastructure/repository/mysql/jobRepoImpl";
import { AgencyRepoImpl } from "../infrastructure/repository/mysql/agencyRepoImpl";
import { DefaultConfigRepoImpl } from "../infrastructure/repository/mysql/defaultConfigRepoImpl";
import { PropicDataSuburbImpl } from "../infrastructure/utils/propicDataSuburbImpl";
import { RevAndClRepoImpl } from "../infrastructure/repository/mysql/revAndClRepoImpl";

export class FetchDataAndStoreReportsGateway {
  send(aParams: ICreateJobDto) {
    const jobRepoImpl = new JobRepoImpl();
    const agencyRepoImpl = new AgencyRepoImpl();
    const defaultConfigRepoImpl = new DefaultConfigRepoImpl();
    const propicDataSuburbImpl = new PropicDataSuburbImpl();
    const revAndClRepoImpl = new RevAndClRepoImpl();
    const fetchDataAndStoreReports = new FetchDataAndStoreReports(
      jobRepoImpl,
      agencyRepoImpl,
      defaultConfigRepoImpl,
      propicDataSuburbImpl,
      revAndClRepoImpl
    );
    return fetchDataAndStoreReports.execute(aParams);
  }
}
