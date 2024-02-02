export interface ISendOtpReqDto {
  email: string;
}

export interface IAuthReqDto extends ISendOtpReqDto {
  password: string;
}

export interface IReSendOtpReqDto {
  token: string;
}

export interface IVerifyOtpReqDto extends IReSendOtpReqDto {
  otp: number;
}
