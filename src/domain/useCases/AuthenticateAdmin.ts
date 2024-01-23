import { IAuthenticationDetails } from "../interfaces/dtos/adminDto";
import { AdminRepo } from "../interfaces/repos/adminDb";
import { ITokenService } from "../interfaces/repos/tokenService";

export class AuthenticateAdmin {
  constructor(public repo: AdminRepo, public tokenService: ITokenService) {}

  async execute(aParams: IAuthenticationDetails) {
    const adminDetails = await this.repo.getAdminByEmailAndPassword(aParams);

    if (!adminDetails) {
      throw new Error("unauthorized!");
    }

    const token = this.tokenService.getToken(adminDetails);

    return token;
  }
}
