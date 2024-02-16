import "dotenv/config";
import { IPropicDataSuburb } from "../../domain/interfaces/utils/propicDataBySuburb";
import axios from "axios";

export interface ISuburbProbabilityDataFromURL {
  isSuccess: boolean;
  data: { data: ISuburbProbabilityData[] };
  pagination: {
    page: number;
    count: number;
    pageSize: number;
  };
}
export interface ISuburbProbabilityData {
  address: string;
  GNAFid: string;
  "Scored Labels": number;
  "Scored Probabilities": number;
  firstPredictedDate: string;
}

export class PropicDataSuburbImpl implements IPropicDataSuburb {
  async getPropertiesWithPagination<T>(aParams: {
    suburbName: string;
    state: string;
    postcode: string;
    page?: number;
  }): Promise<T> {
    let url = `${process.env.PROPIC_API_BASE_URL}?suburb=${aParams.suburbName}&state=${aParams.state}&postcode=${aParams.postcode}`;

    if (aParams.page && aParams.page !== 1) {
      url = `${process.env.PROPIC_API_BASE_URL}?suburb=${aParams.suburbName}&state=${aParams.state}&postcode=${aParams.postcode}&page=${aParams.page}`;
    }

    const headers = {
      "Content-Type": "application/json",
      "x-api-key": process.env.PROPIC_API_KEY as string
    };
    const data = await axios.get(url, {
      headers
    });
    return data as T;
  }
}
