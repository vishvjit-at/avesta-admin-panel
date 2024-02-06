import { SuburbEntity } from "../../../domain/entities/suburbEntity";
import { IsuburbRepo } from "../../../domain/interfaces/repos/suburbRepo";
import { SuburbMapper } from "../mappers/suburbMapper";
import { SuburbModel } from "../sequelize/models/suburbModel";
import { TokenServiceImpl } from "../../utils/tokenServiceImpl";

export class SuburbRepoImplementation implements IsuburbRepo {
  tokenService: TokenServiceImpl;
  constructor() {
    this.tokenService = new TokenServiceImpl();
  }
  async getSuburbById(id: number): Promise<SuburbEntity | undefined> {
    const suburbFromDb = await SuburbModel.findOne({ where: { id } });

    if (!suburbFromDb) {
      return undefined; // Return undefined when no record is found
    }

    return SuburbMapper.toDomain(suburbFromDb) as SuburbEntity;
  }

  async createSuburb(token: string, suburb: SuburbEntity): Promise<number | undefined | string> {
    const createdBy = this.tokenService.getDataFromToken<{ id: number }>(token);

    const insertSuburbdata = await SuburbModel.create({
      suburbName: suburb.getSuburbName(),
      postcode: suburb.getPostcode(),
      state: suburb.getState(),
      createdBy: createdBy?.id,
      id: suburb.getId()
    });
    return insertSuburbdata.dataValues.id;
  }
  async updateSuburbById(suburb: SuburbEntity): Promise<boolean> {
    const updateSuburbdata = await SuburbModel.update(
      {
        subrubName: suburb.getSuburbName(),
        postcode: suburb.getPostcode(),
        state: suburb.getState(),
        id: suburb.getId()
      },
      {
        where: {
          id: suburb.getId()
        }
      }
    );

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
        id: id
      }
    });

    if (deleteSuburbdata > 0) {
      return `Suburb with ID ${id} data deleted successfully.`;
    } else {
      return "Suburb not found.";
    }
  }

  async isSuburbExist(suburb: SuburbEntity): Promise<boolean> {
    let existSuburb = await SuburbModel.findAll({
      where: { postcode: suburb.getPostcode(), suburbName: suburb.getSuburbName() }
    });

    if (existSuburb.length > 0) {
      return true;
    }
    return false;
  }
}
