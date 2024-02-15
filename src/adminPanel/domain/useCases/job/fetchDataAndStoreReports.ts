import { config } from "dotenv";
import { AgencyEntity } from "../../entities/agencyEntity";
import { ICreateJobDto } from "../../interfaces/dtos/jobDto";
import { ISuburbDto } from "../../interfaces/dtos/suburbDto";
import { IAgencyRepo } from "../../interfaces/repos/agencyRepo";
import { IDefaultConfigRepo } from "../../interfaces/repos/defaultConfigRepo";
6;
import { IJobRepo } from "../../interfaces/repos/jobRepo";
import { IPropicDataSuburb } from "../../interfaces/utils/propicDataBySuburb";
import { ISuburbProbabilityData } from "../../../infrastructure/utils/propicDataSuburbImpl";
import { IRevAndClRepo } from "../../interfaces/repos/revAndClRepo";

export class FetchDataAndStoreReports {
  constructor(
    private jobRepo: IJobRepo,
    private agencyRepo: IAgencyRepo,
    private defaultConfigRepo: IDefaultConfigRepo,
    private propicDataSuburb: IPropicDataSuburb,
    private revAndClRepo: IRevAndClRepo
  ) {}
  async execute(aParams: ICreateJobDto) {
    const data = await this.revAndClRepo.getDataByGnafIds([]);
    const agencies = await this.agencyRepo.getAllAgencies();
    const uniqueSuburb = this.getUniqueSuburbs(agencies);

    const { jobId } = await this.jobRepo.createJob(aParams, JSON.stringify(uniqueSuburb));
    const propicProperties = await this.getPropicPropertiesBySuburbs(uniqueSuburb);
    return { jobId };
  }

  getUniqueSuburbs(aAgencies: AgencyEntity[]) {
    if (!aAgencies.length) {
      return [];
    }
    const suburbs: ISuburbDto[] = [];
    const uniqueSuburb: ISuburbDto[] = [];

    aAgencies.forEach((agency) => {
      const config = JSON.parse(agency.getConfig()) as { suburbs: ISuburbDto[] };
      suburbs.push(...config.suburbs);
    });

    suburbs.forEach((suburb) => {
      if (!this.isSuburbAlreadyExist(suburb, uniqueSuburb)) {
        uniqueSuburb.push(suburb);
      }
    });

    return uniqueSuburb;
  }
  isSuburbAlreadyExist = (suburb: ISuburbDto, comparableArray: ISuburbDto[]) => {
    for (let i = 0; i < comparableArray.length; i++) {
      if (
        suburb.postcode === comparableArray[i].postcode &&
        suburb.suburbName === comparableArray[i].suburbName &&
        suburb.state === comparableArray[i].state
      ) {
        return true;
      }
    }
    return false;
  };

  async getPropicPropertiesBySuburbs(suburbs: ISuburbDto[]) {
    const propicData: ISuburbProbabilityData[] = [];
    for (let i = 0; i < suburbs.length; i++) {
      const suburb = suburbs[i];
      let isThereAnyPropertiesRemaining = true;
      let page = 1;
      while (isThereAnyPropertiesRemaining) {
        const properties = await this.propicDataSuburb.getPropertiesWithPagination<any>({
          ...suburb,
          page
        });
        if (!properties.data.data.length) {
          isThereAnyPropertiesRemaining = false;
        } else {
          propicData.push(...properties?.data.data);
          console.log(propicData.length);
          page++;
        }
      }
    }
    return propicData;
  }
}
