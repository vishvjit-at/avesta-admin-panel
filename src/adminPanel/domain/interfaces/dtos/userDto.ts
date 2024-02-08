export interface ISendOtpReqDto {
  email: string;
}

export interface IReSendOtpReqDto {
  token: string;
}

export interface IVerifyOtpReqDto extends IReSendOtpReqDto {
  otp: number;
}

export interface IUserAuthorizationDto extends IReSendOtpReqDto {
  permission: string;
}
