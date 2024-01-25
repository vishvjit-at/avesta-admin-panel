import { UserEntity } from "../../../domain/entities/userEntity";
import { UserModel } from "../sequalize/userModel";

export class AuthenticateAdminMapper {
  static toDomain(adminFromDb: UserModel[]) {
    const admins: UserEntity[] = [];
    adminFromDb.forEach((data) => {
      const admin = new UserEntity(
        data.dataValues.name,
        data.dataValues.email,
        data.dataValues.password,
        data.dataValues.id
      );
      admins.push(admin);
    });

    return admins;
  }
}
