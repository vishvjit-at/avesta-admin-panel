import { UserEntity } from "../../entities/userEntity";

export interface IUserRepo {
  getUserByEmail(email: string): Promise<UserEntity | undefined>;
}
