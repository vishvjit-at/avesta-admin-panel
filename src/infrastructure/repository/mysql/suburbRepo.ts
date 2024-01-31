import { SuburbEntity } from "../../../domain/entities/suburbEntity";
import { IsuburbRepo } from "../../../domain/interfaces/repos/suburbRepo";
import { SuburbMapper } from "../mappers/suburbMapper";
import { SuburbModel } from "../sequelize/models/suburbModel";

export class SuburbRepoImplementation implements IsuburbRepo {
    async getSuburbById(id: number): Promise<SuburbEntity | undefined> {
        const suburbFromDb = await SuburbModel.findOne({ where: { id } });

        if (!suburbFromDb) {
            return undefined; // Return undefined when no record is found
        }

        return SuburbMapper.toDomain(suburbFromDb) as SuburbEntity;
    }

    async createSuburb(suburb: SuburbEntity): Promise<number | undefined> {
        const insertSuburbdata = await SuburbModel.create({
            name: suburb.getName(),
            postcode: suburb.getPostcode(),
            state: suburb.getState(),
            id: suburb.getId()
        })
        return insertSuburbdata.dataValues.id;
    }
    async updateSuburbById(suburb: SuburbEntity): Promise<boolean> {
        const updateSuburbdata = await SuburbModel.update({
            name: suburb.getName(),
            postcode: suburb.getPostcode(),
            state: suburb.getState(),
            id: suburb.getId()
        }, {
            where: {
                id: suburb.getId()
            }
        });

        return updateSuburbdata[0] > 0; // Returns true if at least one row was updated
    }


    async getAllSuburb(): Promise<SuburbEntity[]> {
        const suburbFromDb = await SuburbModel.findAll();
        if (suburbFromDb.length === 0) {
            // Handle the case where no data matches the query
            return [];
        }
        return SuburbMapper.toDomain(suburbFromDb) as SuburbEntity[];

    }

    async deleteSuburbById(id: number): Promise<string | undefined> {
        const deleteSuburbdata = await SuburbModel.destroy({
            where: {
                id: id,
            },
        });

        if (deleteSuburbdata > 0) {
            return `Suburb with ID ${id} data deleted successfully.`;
        } else {
            return 'Suburb not found.';
        }
    }

}