import { SuburbEntity } from "../../../domain/entities/suburbEntity";
import { SuburbModel } from "../sequelize/models/suburbModel";

export class SuburbMapper {
    static toDomain(raw: SuburbModel | SuburbModel[] | null): SuburbEntity | SuburbEntity[] | undefined {
        if (!raw) {
            return undefined;
        }

        if (Array.isArray(raw)) {
            return raw.map(element => this.convertToDomain(element));
        } else {
            return this.convertToDomain(raw);
        }
    }

    private static convertToDomain(element: SuburbModel): SuburbEntity {
        return new SuburbEntity(
            element.dataValues
        );
    }

}