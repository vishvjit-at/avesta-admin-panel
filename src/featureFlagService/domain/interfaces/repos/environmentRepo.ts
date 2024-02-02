export interface IEnvironmentRepository {
  getEnvironmentIdByName(projectId: number, environmentName: string): Promise<number | null>;
}
