// export interface IDefaultConfigRepo {
//   getConfig(): Promise<string>;
// }

import { DefaultConfigModel } from "../../../../adminPanel/infrastructure/repository/sequelize/models/defaultConfigModel";
import { IDefaultConfigReqDto } from "../dtos/defalutConfigDto";

export interface IDefaultConfigRepo {
  getDefaultConfig(): Promise<DefaultConfigModel[]>;
  updateDafaultConfig(aParams: IDefaultConfigReqDto): Promise<void>;
}
