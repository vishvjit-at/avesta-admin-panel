import { UserEntity } from "../../../domain/entities/userEntity";
import { UserModel } from "../sequelize/models/userModel";

export class userMapper {
  static toDomain(usersFromDb: UserModel[]) {
    const users: UserEntity[] = [];
    usersFromDb.forEach((data) => {
      const user = new UserEntity({
        name: data.dataValues.userName,
        email: data.dataValues.email,
        password: data.dataValues.password,
        role: data.dataValues.id
      });
      users.push(user);
    });

    return users;
  }
}
