import { IAuthenticationDetails } from "../domain/interfaces/dtos/adminDto";
import { AuthenticateAdmin } from "../domain/useCases/AuthenticateAdmin";
import { JwtTokenServiceImplementation } from "../infrastructure/utils/jwtTokenServiceImplementation";
import { AdminImplementation } from "../infrastructure/repository/mysql/adminImplementation";

export class AuthenticateAdminGateway {
  Login(aParams: IAuthenticationDetails) {
    const iAdminImplementation = new AdminImplementation();
    const iJwtTokenServiceImplementation = new JwtTokenServiceImplementation();
    const adminUseCase = new AuthenticateAdmin(iAdminImplementation, iJwtTokenServiceImplementation);
    return adminUseCase.execute(aParams);
  }
}
