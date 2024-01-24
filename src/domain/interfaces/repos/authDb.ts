import { AdminEntity } from "../../entities/authenticationEntity";
import { IAuthenticationDetails } from "../dtos/adminDto";

export interface AdminRepo {
  getAdminByEmailAndPassword(adminDetails: IAuthenticationDetails): Promise<AdminEntity | undefined>;
}
