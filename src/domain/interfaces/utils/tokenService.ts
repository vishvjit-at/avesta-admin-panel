import { UserEntity } from "../../entities/userEntity";

export interface ITokenService {
  getToken(admin: UserEntity): string;
  getDataFromToken<T>(token: string): T | undefined;
}
