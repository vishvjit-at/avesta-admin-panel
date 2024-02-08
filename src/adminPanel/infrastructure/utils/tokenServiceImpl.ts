import { UserEntity } from "../../domain/entities/userEntity";
import { ITokenService } from "../../domain/interfaces/utils/tokenService";

import * as jwt from "jsonwebtoken";

export class TokenServiceImpl implements ITokenService {
  secretKey: string;
  constructor() {
    this.secretKey = "secretKey";
  }
  getToken(user: UserEntity): string {
    const payloadData = {
      name: user.getUserName(),
      email: user.getEmail(),
      id: user.getId()
    };

    const token = jwt.sign(payloadData, this.secretKey);

    return token;
  }

  getDataFromToken<T>(token: string): T | undefined {
    const data = jwt.decode(token);
    if (!data) {
      return;
    }
    return data as T;
  }
}
