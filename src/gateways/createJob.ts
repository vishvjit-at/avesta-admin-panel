import { ICreateJobDto } from "../domain/interfaces/dtos/jobDto";
import { CreateJob } from "../domain/useCases/job/createJob";
import { JobRepoImpl } from "../infrastructure/repository/mysql/jobRepoImpl";
import { AgencyRepoImpl } from "../infrastructure/repository/mysql/agencyRepoImpl";

export class CreateJobGateway {
  send(aParams: ICreateJobDto) {
    const jobRepoImpl = new JobRepoImpl();
    const agencyRepoImpl = new AgencyRepoImpl();
    // const reSendOtpUseCase = new CreateJob(jobRepoImpl, agencyRepoImpl);
    // return reSendOtpUseCase.execute(aParams);
  }
}
