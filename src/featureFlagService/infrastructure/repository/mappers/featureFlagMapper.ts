import { FeatureFlagEntity } from "../../../domain/entities/featureFlagEntity";

export class featureFlagMapper {
  public static toDomain(raw: any): FeatureFlagEntity {
    const key = raw.dataValues.key as string;
    const projectId = raw.dataValues.project_id as number;
    const id = raw.dataValues.id as number;

    return new FeatureFlagEntity(key, projectId, id);
  }
}
