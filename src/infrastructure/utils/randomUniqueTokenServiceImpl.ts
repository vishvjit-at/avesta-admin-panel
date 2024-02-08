import crypto from "crypto";
import { IRandomUniqueTokenService } from "../../domain/interfaces/utils/randomUniqueTokenService";

export class RandomUniqueTokenServiceImpl implements IRandomUniqueTokenService {
  getToken(): string {
    return crypto.randomUUID();
  }
}
