import { AdminEntity } from "../../../domain/entities/adminEntity";
import { adminSequelizeModel } from "../sequalize/adminSequalizeModel";
import { AdminMapper } from "../mappers/adminMapper";
import { IAdminLoginDetails } from "../../../domain/interfaces/dtos/adminDto";
import { AdminRepo } from "../../../domain/interfaces/repos/adminDb";

export class AdminImplementation implements AdminRepo {
  async getUserByEmail(admin: IAdminLoginDetails): Promise<AdminEntity | undefined> {
    const adminFromDb = await adminSequelizeModel.findAll({ where: { email: admin.email, password: admin.password } });

    const admins = AdminMapper.toDomain(adminFromDb);
    if (!admins.length) {
      return;
    }
    return admins[0];
  }
}
