import { IAdminLoginDetails } from "../interfaces/dtos/adminDto";
import { AdminRepo } from "../interfaces/repos/adminDb";
import { ITokenService } from "../interfaces/repos/tokenService";

export class VerifyAdmin {
  constructor(public repo: AdminRepo, public tokenService: ITokenService) {}

  async execute(aParams: IAdminLoginDetails) {
    const adminDetails = await this.repo.getUserByEmail(aParams);

    if (!adminDetails) {
      throw new Error("unauthorized!");
    }

    const token = this.tokenService.getToken(adminDetails);

    return token;
  }
}
