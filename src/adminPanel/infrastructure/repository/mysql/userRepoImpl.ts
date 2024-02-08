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

  async getUserPermissionsById(id?: number): Promise<string[]> {
    if (!id) {
      return [];
    }
    const userPermissions = (await UserModel.sequelize?.query(`SELECT 
            json_arrayagg(pm.name) as permissions
        FROM
            users u
                JOIN
            userRoles ur ON ur.userId = u.id
                JOIN
            roles r ON r.id = ur.roleId
                JOIN
            rolePolicy rp ON rp.roleId = r.id
                JOIN
            policy p ON p.id = rp.policyId
                JOIN
            policyPermission pp ON pp.policyId = p.id
                JOIN
            permission pm ON pm.id = pp.permissionId
        WHERE
    u.id = ${id}`)) as { permissions: string[] }[][];

    if (!userPermissions.length && userPermissions[0].length) {
      return [];
    }
    return userPermissions[0][0].permissions;
  }
}
