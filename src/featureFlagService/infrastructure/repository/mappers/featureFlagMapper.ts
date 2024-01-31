import { FeatureFlagEntity } from "src/featureFlagService/domain/entities/featureFlagEntity";

export class featureFlagMapper {
  toDomain(raw: any): FeatureFlagEntity {
    const key = raw.dataValues.key as string;
    const isEnabled = raw.dataValues.isEnabled as boolean;
    const id = raw.dataValues.id as number;

    return new FeatureFlagEntity(key, isEnabled, id);
  }
}
