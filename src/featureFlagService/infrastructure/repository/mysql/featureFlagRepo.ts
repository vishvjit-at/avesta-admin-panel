import { FeatureFlagModel } from "../../../../adminPanel/infrastructure/repository/sequelize/models/featureFlagModel";
import { FeatureFlagStatusModel } from "../../../../adminPanel/infrastructure/repository/sequelize/models/featureFlagStatusModel";
import { IFeatureFlagRepo } from "../../../domain/interfaces/repos/featureFlagRepo";
import { featureFlagMapper } from "../mappers/featureFlagMapper";
import { FeatureFlagEntity } from "src/featureFlagService/domain/entities/featureFlagEntity";

export class FeatureFlagRepo implements IFeatureFlagRepo {
  async getEnabledFeatureFlags(environmentId: number): Promise<FeatureFlagEntity[]> {
    const flagsData = await FeatureFlagStatusModel.findAll({
      where: { is_enabled: true, environment_id: environmentId },
      include: [
        {
          model: FeatureFlagModel,
          as: "featureFlag",
          attributes: ["key", "id", "project_id"]
        }
      ]
    });

    const flags: FeatureFlagEntity[] = flagsData.map((flag) => {
      return featureFlagMapper.toDomain(flag.dataValues.featureFlag);
    });
    return flags;
  }
}
