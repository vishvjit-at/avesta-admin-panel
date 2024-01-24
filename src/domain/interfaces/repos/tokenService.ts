import { AdminEntity } from "../../entities/authenticationEntity";

export interface ITokenService {
  getToken(admin: AdminEntity): string;
  getDataFromToken<T>(token: string): T | undefined;
}
