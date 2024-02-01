import { IFeatureFlagRepo } from "../../interfaces/repos/featureFlagRepo";
import { getFeatureFlagResDTO } from "../../interfaces/dtos/getFeatureFlagResDTO";
import { IProjectRepository } from "../../interfaces/repos/projectRepo";
import { IEnvironmentRepository } from "../../interfaces/repos/environmentRepo";
import { FeatureFlagEntity } from "../../entities/featureFlagEntity";

export class GetFeatureFlags {
  constructor(
    private projectRepository: IProjectRepository,
    private environmentRepository: IEnvironmentRepository,
    private featureFlagRepository: IFeatureFlagRepo
  ) {}

  async execute(projectName: string, environmentName: string): Promise<getFeatureFlagResDTO[]> {
    const projectId = await this.projectRepository.getProjectIdByName(projectName);
    if (projectId === null) {
      throw new Error("Project not found");
    }

    const environmentId = await this.environmentRepository.getEnvironmentIdByName(projectId, environmentName);
    if (environmentId === null) {
      throw new Error("Environment not found");
    }

    const flags: FeatureFlagEntity[] = await this.featureFlagRepository.getEnabledFeatureFlags(environmentId);
    const activeFeatureFlags: getFeatureFlagResDTO[] = flags.map((flag) => {
      return { key: flag.getKey() };
    });

    return activeFeatureFlags;
  }
}
