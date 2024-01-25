import { UserEntity } from "../../../domain/entities/userEntity";
import { UserModel } from "../sequalize/userModel";
import { AuthenticateAdminMapper } from "../mappers/userMapper";
import { IAuthReqDto } from "../../../domain/interfaces/dtos/userDto";
import { IUserRepo } from "../../../domain/interfaces/repos/userRepo";

export class UserRepoImpl implements IUserRepo {
  async getAdminByEmailAndPassword(admin: IAuthReqDto): Promise<UserEntity | undefined> {
    const adminFromDb = await UserModel.findAll({ where: { email: admin.email, password: admin.password } });

    const admins = AuthenticateAdminMapper.toDomain(adminFromDb);
    if (!admins.length) {
      return;
    }
    return admins[0];
  }
}
