import { AgencyConfigEntity } from "../../entities/agencyConfigEntity";
import { ICreateJobDto } from "../../interfaces/dtos/jobDto";
import { ISuburbDto } from "../../interfaces/dtos/suburbDto";
import { IDefaultConfigRepo } from "../../interfaces/repos/defaultConfigRepo";
6;
import { IJobRepo } from "../../interfaces/repos/jobRepo";
import { IPropicDataSuburb } from "../../interfaces/utils/propicDataBySuburb";
import {
  ISuburbProbabilityData,
  ISuburbProbabilityDataFromURL
} from "../../../infrastructure/utils/propicDataSuburbImpl";
import { IRevAndClRepo } from "../../interfaces/repos/revAndClRepo";
import { IJobPropicPredictionDataRepo } from "../../interfaces/repos/jobPropicPredictionDataRepo";

export interface IJobPropicPredictionData {
  address: string;
  gnafId: string;
  scoredLabels: number;
  scoredProbabilities: number;
  firstPredictedDate: string;
  suburbName: string;
  state: string;
  postcode: string;
  jobId: number;
}

export class FetchDataAndStoreReports {
  constructor(
    private jobRepo: IJobRepo,
    private defaultConfigRepo: IDefaultConfigRepo,
    private propicDataSuburb: IPropicDataSuburb,
    private revAndClRepo: IRevAndClRepo,
    private jobPropicPredictionDataRepo: IJobPropicPredictionDataRepo
  ) {}

  async execute(aParams: ICreateJobDto) {
    const agencies = await this.revAndClRepo.getAgenciesAndConfig();
    const uniqueSuburb = this.getUniqueSuburbs(agencies);

    const { jobId } = await this.jobRepo.createJob(aParams, JSON.stringify(uniqueSuburb));
    const propicProperties = await this.getPropicPropertiesBySuburbs(uniqueSuburb, jobId);
    await this.jobPropicPredictionDataRepo.insert(propicProperties);
    return { jobId };
  }

  getUniqueSuburbs(aAgencies: AgencyConfigEntity[]) {
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

  async getPropicPropertiesBySuburbs(suburbs: ISuburbDto[], jobId: number) {
    const propicData: IJobPropicPredictionData[] = [];
    for (let i = 0; i < suburbs.length; i++) {
      const suburb = suburbs[i];
      let isThereAnyPropertiesRemaining = true;
      let page = 1;
      while (isThereAnyPropertiesRemaining) {
        const properties = await this.propicDataSuburb.getPropertiesWithPagination<ISuburbProbabilityDataFromURL>({
          ...suburb,
          page
        });
        if (!properties.data.data.length || propicData.length > 2000) {
          isThereAnyPropertiesRemaining = false;
        } else {
          propicData.push(...this.mapPropicData(properties?.data.data, suburb, jobId));
          console.log(propicData.length);
          page++;
        }
      }
    }
    return propicData;
  }
  mapPropicData(property: ISuburbProbabilityData[], suburb: ISuburbDto, jobId: number) {
    const properties: IJobPropicPredictionData[] = [];

    property.forEach((property) => {
      properties.push({
        address: property.address,
        firstPredictedDate: property.firstPredictedDate,
        gnafId: property.GNAFid,
        scoredLabels: property["Scored Labels"],
        scoredProbabilities: Math.round(property["Scored Probabilities"] * 100),
        postcode: suburb.postcode,
        state: suburb.state,
        suburbName: suburb.suburbName,
        jobId: jobId
      });
    });
    return properties;
  }
}
