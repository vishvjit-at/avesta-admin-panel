import { IRandomUniqueTokenService } from "src/domain/interfaces/utils/randomUniqueTokenService";
import crypto from "crypto";

export class RandomUniqueTokenServiceImpl implements IRandomUniqueTokenService {
  getToken(): string {
    return crypto.randomUUID();
  }
}
