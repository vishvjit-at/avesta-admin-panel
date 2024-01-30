import { FeatureFlagEntity } from "../../../domain/entities/featureFlagEntity";
import { IFeatureFlagRepo } from "../../../domain/interfaces/repos/featureFlagRepo";

export class FeatureFlagRepo implements IFeatureFlagRepo {
  getFeatureFlagByEnvironment(environment: string): Promise<FeatureFlagEntity[]> {
    return Promise.resolve([new FeatureFlagEntity("test", true, 1)]);
  }
}
