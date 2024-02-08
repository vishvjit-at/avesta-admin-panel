import { ICreateJobDto } from "../../../domain/interfaces/dtos/jobDto";
import { IJobRepo } from "../../../domain/interfaces/repos/jobRepo";
import { JobModel } from "../sequelize/models/jobModel";

export class JobRepoImpl implements IJobRepo {
  async createJob(aParams: ICreateJobDto, agencyConfig: string): Promise<{ jobId: number }> {
    const startAt = new Date();
    const job = await JobModel.create({
      runType: aParams.runType,
      runBy: aParams.runBy,
      agencyConfig: agencyConfig,
      startAt: startAt
    });
    return { jobId: job.dataValues.id };
  }
}
