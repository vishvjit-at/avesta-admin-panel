import { AdminEntity } from "../../../domain/entities/adminEntity";
import { IAuthenticationDetails } from "../dtos/adminDto";

export interface AdminRepo {
  getAdminByEmailAndPassword(adminDetails: IAuthenticationDetails): Promise<AdminEntity | undefined>;
}
