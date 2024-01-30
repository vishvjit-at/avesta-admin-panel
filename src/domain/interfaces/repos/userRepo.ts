import { UserEntity } from "../../entities/userEntity";
import { IAuthReqDto } from "../dtos/userDto";

export interface IUserRepo {
  getUserByEmailAndPassword(userDetails: IAuthReqDto): Promise<UserEntity | undefined>;
  getUserByEmail(email: string): Promise<UserEntity | undefined>;
}
