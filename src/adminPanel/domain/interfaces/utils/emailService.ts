export interface IEmailService {
  send(params: { emailTo: string; emailFrom: string; body: string; subject?: string }): Promise<void>;
}
