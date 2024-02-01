//import { getFeatureFlagResDTO } from "../dtos/getFeatureFlagResDTO";

import { FeatureFlagEntity } from "../../entities/featureFlagEntity";

export interface IFeatureFlagRepo {
  getEnabledFeatureFlags(environmentId: number): Promise<FeatureFlagEntity[]>;
}
