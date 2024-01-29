import { UserEntity } from "../../../domain/entities/userEntity";
import { UserModel } from "../sequelize/models/userModel";
import { userMapper } from "../mappers/userMapper";
import { IAuthReqDto } from "../../../domain/interfaces/dtos/userDto";
import { IUserRepo } from "../../../domain/interfaces/repos/userRepo";

export class UserRepoImpl implements IUserRepo {
  async getUserByEmailAndPassword(user: IAuthReqDto): Promise<UserEntity | undefined> {
    const usersFromDb = await UserModel.findAll({ where: { email: user.email, password: user.password } });

    const users = userMapper.toDomain(usersFromDb);
    if (!users.length) {
      return;
    }
    return users[0];
  }
}
