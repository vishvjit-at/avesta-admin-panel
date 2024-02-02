export interface IProjectRepository {
  getProjectIdByName(projectName: string): Promise<number | null>;
}
