import { IProjectRepository } from "../../../domain/interfaces/repos/projectRepo";
import { ProjectModel } from "../../../../infrastructure/repository/sequelize/models/projectModel";

export class ProjectRepository implements IProjectRepository {
  async getProjectIdByName(projectName: string): Promise<number | null> {
    const project = await ProjectModel.findOne({ where: { name: projectName } });

    if (!project) {
      return null;
    }

    return project.dataValues.id;
  }
}
