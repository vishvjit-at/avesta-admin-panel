import { ICreateJobDto } from "../dtos/jobDto";

export interface IJobRepo {
  createJob(aParams: ICreateJobDto, agencyConfig: string): Promise<{ jobId: number }>;
}
