import { AdminEntity } from "../../../domain/entities/adminEntity";

export interface ITokenService {
  getToken(admin: AdminEntity): string;
  isTokenVerified(token: string): boolean;
}
