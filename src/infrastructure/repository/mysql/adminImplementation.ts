import { AdminEntity } from "../../../domain/entities/adminEntity";
import { adminSequelizeModel } from "../sequalize/adminSequalizeModel";
import { AuthenticateAdminMapper } from "../mappers/adminMapper";
import { IAuthenticationDetails } from "../../../domain/interfaces/dtos/adminDto";
import { AdminRepo } from "../../../domain/interfaces/repos/adminDb";

export class AdminImplementation implements AdminRepo {
  async getAdminByEmailAndPassword(admin: IAuthenticationDetails): Promise<AdminEntity | undefined> {
    const adminFromDb = await adminSequelizeModel.findAll({ where: { email: admin.email, password: admin.password } });

    const admins = AuthenticateAdminMapper.toDomain(adminFromDb);
    if (!admins.length) {
      return;
    }
    return admins[0];
  }
}
