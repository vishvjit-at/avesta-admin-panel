import { ProjectModel } from "../../../../adminPanel/infrastructure/repository/sequelize/models/projectModel";
import { IProjectRepository } from "../../../domain/interfaces/repos/projectRepo";

export class ProjectRepository implements IProjectRepository {
  async getProjectIdByName(projectName: string): Promise<number | null> {
    const project = await ProjectModel.findOne({ where: { name: projectName } });

    if (!project) {
      return null;
    }

    return project.dataValues.id;
  }
}
