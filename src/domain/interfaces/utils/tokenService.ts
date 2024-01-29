import { UserEntity } from "../../entities/userEntity";

export interface ITokenService {
  getToken(user: UserEntity): string;
  getDataFromToken<T>(token: string): T | undefined;
}
