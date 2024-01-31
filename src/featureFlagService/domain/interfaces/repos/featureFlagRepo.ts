import { FeatureFlagEntity } from "../../entities/featureFlagEntity";

export interface IFeatureFlagRepo {
  getFeatureFlagByEnvironment(environment: string): Promise<FeatureFlagEntity[]>;
}
