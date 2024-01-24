import { AdminEntity } from "../../../domain/entities/authenticationEntity";
import { adminSequelizeModel } from "../sequalize/adminSequalizeModel";
import { AuthenticateAdminMapper } from "../mappers/adminMapper";
import { IAuthenticationDetails } from "../../../domain/interfaces/dtos/adminDto";
import { AdminRepo } from "../../../domain/interfaces/repos/authDb";

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
