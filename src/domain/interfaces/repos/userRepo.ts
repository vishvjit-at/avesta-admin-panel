import { UserEntity } from "../../entities/userEntity";
import { IAuthReqDto } from "../dtos/userDto";

export interface IUserRepo {
  getAdminByEmailAndPassword(userDetails: IAuthReqDto): Promise<UserEntity | undefined>;
}
