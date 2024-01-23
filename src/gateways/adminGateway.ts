import { IAdminLoginDetails } from "../domain/interfaces/dtos/adminDto";
import { VerifyAdmin } from "../domain/useCases/verifyAdmin";
import { JwtTokenServiceImplementation } from "../infrastructure/repository/jwt/jwtTokenServiceImplementation";
import { AdminImplementation } from "../infrastructure/repository/mysql/adminImplementation";

export class AdminGateway {
  Login(aParams: IAdminLoginDetails) {
    const iAdminImplementation = new AdminImplementation();
    const iJwtTokenServiceImplementation = new JwtTokenServiceImplementation();
    const adminUseCase = new VerifyAdmin(iAdminImplementation, iJwtTokenServiceImplementation);
    return adminUseCase.execute(aParams);
  }
}
