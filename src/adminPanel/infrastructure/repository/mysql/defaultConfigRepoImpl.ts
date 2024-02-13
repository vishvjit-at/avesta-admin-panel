import { IDefaultConfigRepo } from "../../../domain/interfaces/repos/defaultConfigRepo";
import { DefaultConfigModel } from "../sequelize/models/defaultConfigModel";

export class DefaultConfigRepoImpl implements IDefaultConfigRepo {
  async getConfig(): Promise<string> {
    const data = await DefaultConfigModel.findAll();

    return data[0].dataValues;
  }
}
