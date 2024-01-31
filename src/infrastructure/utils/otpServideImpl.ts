import { IOtpService } from "../../domain/interfaces/utils/otpService";
import otpGenerator from "otp-generator";

export class OtpServiceImpl implements IOtpService {
  getOtp(): string {
    return otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      specialChars: false,
      upperCaseAlphabets: false
    });
  }
}
