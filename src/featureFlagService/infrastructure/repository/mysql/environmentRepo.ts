import { EnvironmentModel } from "../../../../adminPanel/infrastructure/repository/sequelize/models/environmentModel";
import { IEnvironmentRepository } from "../../../domain/interfaces/repos/environmentRepo";

export class EnvironmentRepository implements IEnvironmentRepository {
  async getEnvironmentIdByName(projectId: number, environmentName: string): Promise<number | null> {
    const env = await EnvironmentModel.findOne({ where: { name: environmentName, project_id: projectId } });
    if (!env) {
      return null;
    }

    return env.dataValues.id;
  }
}
