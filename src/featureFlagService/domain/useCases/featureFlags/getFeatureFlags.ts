import { IFeatureFlagRepo } from "../../interfaces/repos/featureFlagRepo";
import { FeatureFlagEntity } from "../../entities/featureFlagEntity";

export class GetFeatureFlags {
  constructor(private featureFlagRepo: IFeatureFlagRepo) {}

  async execute(environment: string): Promise<FeatureFlagEntity[]> {
    return this.featureFlagRepo.getFeatureFlagByEnvironment(environment);
  }
}
