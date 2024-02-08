import { SuburbEntity } from "../../../domain/entities/suburbEntity";
import { ISuburbRepo } from "../../../domain/interfaces/repos/suburbRepo";
import { SuburbMapper } from "../mappers/suburbMapper";
import { SuburbModel } from "../sequelize/models/suburbModel";
import { TokenServiceImpl } from "../../utils/tokenServiceImpl";
import { IGetPaginationReqDto, ISuburbIdDto } from "../../../domain/interfaces/dtos/suburbDto";

export class SuburbRepoImpl implements ISuburbRepo {
  tokenService: TokenServiceImpl;
  constructor() {
    this.tokenService = new TokenServiceImpl();
  }
  async getSuburbById(aParams: ISuburbIdDto): Promise<SuburbEntity | undefined> {
    const suburbFromDb = await SuburbModel.findOne({ where: { id: aParams.id } });

    if (!suburbFromDb) {
      return undefined; // Return undefined when no record is found
    }

    return SuburbMapper.toDomain(suburbFromDb) as SuburbEntity;
  }

  async createSuburb(token: string, suburb: SuburbEntity) {
    const createdBy = this.tokenService.getDataFromToken<{ id: number }>(token);

    await SuburbModel.create({
      suburbName: suburb.getSuburbName(),
      postcode: suburb.getPostcode(),
      state: suburb.getState(),
      createdBy: createdBy?.id,
      id: suburb.getId()
    });
  }
  async updateSuburbById(suburb: SuburbEntity): Promise<boolean> {
    const updateSuburbdata = await SuburbModel.update(
      {
        suburbName: suburb.getSuburbName(),
        postcode: suburb.getPostcode(),
        state: suburb.getState()
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
      return [];
    }
    return SuburbMapper.toDomain(suburbFromDb) as SuburbEntity[];
  }

  async deleteSuburbById(aParams: ISuburbIdDto): Promise<number | undefined> {
    const deleteSuburbdata = await SuburbModel.destroy({
      where: {
        id: aParams.id
      }
    });

    return deleteSuburbdata;
  }

  async getSuburbWithPagination(aParams: IGetPaginationReqDto): Promise<{ total: number; data: SuburbModel[] }> {
    const page = aParams.page > 1 ? aParams.page : 1;
    const size = aParams.size > 0 && aParams.size < 10 ? aParams.size : 10;
    const offset = (page - 1) * size;
    const suburbs = await SuburbModel.findAndCountAll({ offset: offset, limit: Number(size) });

    return { total: suburbs.count, data: suburbs.rows };
  }

  async isSuburbExist(suburb: SuburbEntity): Promise<boolean> {
    let existSuburb = await SuburbModel.findAll({
      where: { postcode: suburb.getPostcode(), suburbName: suburb.getSuburbName() }
    });

    if (!existSuburb.length) {
      return false;
    }
    return true;
  }
}
