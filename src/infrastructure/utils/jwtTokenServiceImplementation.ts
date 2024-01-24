import { AdminEntity } from "../../domain/entities/authenticationEntity";
import { ITokenService } from "../../domain/interfaces/repos/tokenService";

import * as jwt from "jsonwebtoken";

export class JwtTokenServiceImplementation implements ITokenService {
  secretKey: string;
  constructor() {
    this.secretKey = "secretKey";
  }
  getToken(admin: AdminEntity): string {
    const payloadData = {
      name: admin.getName(),
      email: admin.getEmail(),
      id: admin.getId()
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
