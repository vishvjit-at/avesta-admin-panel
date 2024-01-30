export interface IEmailService {
  sendEmail(params: { emailTo: string; emailFrom: string; body: string; subject?: string }): Promise<void>;
}
