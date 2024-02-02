import { UserEntity } from "../../../domain/entities/userEntity";
import { UserModel } from "../sequelize/models/userModel";
import { userMapper } from "../mappers/userMapper";
import { IUserRepo } from "../../../domain/interfaces/repos/userRepo";

export class UserRepoImpl implements IUserRepo {
  async getUserByEmail(email: string): Promise<UserEntity | undefined> {
    const userFromDb = await UserModel.findOne({ where: { email: email } });
    if (!userFromDb || !userFromDb.dataValues) {
      return;
    }
    const users = userMapper.toDomain([userFromDb]);
    return users[0];
  }
}
