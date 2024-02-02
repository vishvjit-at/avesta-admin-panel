import { getFeatureFlagResDTO } from "../domain/interfaces/dtos/getFeatureFlagResDTO";
import { IEnvironmentRepository } from "../domain/interfaces/repos/environmentRepo";
import { IFeatureFlagRepo } from "../domain/interfaces/repos/featureFlagRepo";
import { IProjectRepository } from "../domain/interfaces/repos/projectRepo";
import { GetFeatureFlags } from "../domain/useCases/featureFlags/getFeatureFlags";
import { EnvironmentRepository } from "../infrastructure/repository/mysql/environmentRepo";
import { FeatureFlagRepo } from "../infrastructure/repository/mysql/featureFlagRepo";
import { ProjectRepository } from "../infrastructure/repository/mysql/projectRepo";

export class FeatureFlag {
  getFeatureFlags(projectName: string, environmentName: string): Promise<getFeatureFlagResDTO[]> {
    const projectRepository: IProjectRepository = new ProjectRepository();
    const environmentRepository: IEnvironmentRepository = new EnvironmentRepository();
    const featureFlagRepository: IFeatureFlagRepo = new FeatureFlagRepo();
    const usecase = new GetFeatureFlags(projectRepository, environmentRepository, featureFlagRepository);
    return usecase.execute(projectName, environmentName);
  }
}
