import { FeatureFlagEntity } from "../domain/entities/featureFlagEntity";
import { IFeatureFlagRepo } from "../domain/interfaces/repos/featureFlagRepo";
import { GetFeatureFlags } from "../domain/useCases/featureFlags/getFeatureFlags";
import { FeatureFlagRepo } from "../infrastructure/repository/mysql/featureFlagRepo";

export class FeatureFlag {
  getFeatureFlags(environment: string): Promise<FeatureFlagEntity[]> {
    const repo: IFeatureFlagRepo = new FeatureFlagRepo();
    const usecase = new GetFeatureFlags(repo);
    return usecase.execute(environment);
  }
}
