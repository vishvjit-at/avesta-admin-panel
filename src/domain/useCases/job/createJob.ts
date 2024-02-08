import { ICreateJobDto } from "../../interfaces/dtos/jobDto";
import { IAgencyRepo } from "../../interfaces/repos/agencyRepo";
import { IAgencySuburbRepo } from "../../interfaces/repos/agencySuburbRepo";
import { IJobRepo } from "../../interfaces/repos/jobRepo";

export class CreateJob {
  constructor(
    private jobRepo: IJobRepo,
    private agencyRepo: IAgencyRepo,
    private agencySuburbRepo: IAgencySuburbRepo
  ) {}
  async execute(aParams: ICreateJobDto) {
    const agencies = await this.agencyRepo.getAllAgencies();
    const agencyConfig = JSON.stringify(agencies);
    const { jobId } = await this.jobRepo.createJob(aParams, agencyConfig);
    const suburbs = await this.agencySuburbRepo.getUniqueSuburbs();
    return { jobId };
  }
  async getUniqueSuburbs() {
    return;
  }
}
