import { AdminEntity } from "../../domain/entities/adminEntity";
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

  isTokenVerified(token: string): boolean {
    const data = jwt.verify(token, this.secretKey);

    return data ? true : false;
  }
}
