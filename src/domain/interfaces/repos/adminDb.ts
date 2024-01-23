import { AdminEntity } from "../../../domain/entities/adminEntity";
import { IAdminLoginDetails } from "../dtos/adminDto";

export interface AdminRepo {
  getUserByEmail(adminDetails: IAdminLoginDetails): Promise<AdminEntity | undefined>;
}
