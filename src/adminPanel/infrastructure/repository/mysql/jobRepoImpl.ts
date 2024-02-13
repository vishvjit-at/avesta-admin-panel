import { ICreateJobDto } from "../../../domain/interfaces/dtos/jobDto";
import { IJobRepo } from "../../../domain/interfaces/repos/jobRepo";
import { JobModel } from "../sequelize/models/jobModel";

export class JobRepoImpl implements IJobRepo {
  async createJob(aParams: ICreateJobDto, suburbsConfig: string): Promise<{ jobId: number }> {
    const job = await JobModel.create({
      runBy: aParams.runBy,
      suburbsConfig: suburbsConfig,
      status: "pending"
    });
    return { jobId: job.dataValues.id };
  }
}
