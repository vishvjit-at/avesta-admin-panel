import { AdminEntity } from "../../../domain/entities/adminEntity";
import { adminSequelizeModel } from "../sequalize/adminSequalizeModel";

export class AuthenticateAdminMapper {
  static toDomain(adminFromDb: adminSequelizeModel[]) {
    const admins: AdminEntity[] = [];
    adminFromDb.forEach((data) => {
      const admin = new AdminEntity(
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
