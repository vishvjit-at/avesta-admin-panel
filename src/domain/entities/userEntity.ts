export class UserEntity {
  constructor(private user: { name: string; email: string; id?: number }) {}

  getId(): number | undefined {
    return this.user.id;
  }

  getUserName(): string {
    return this.user.name;
  }

  getEmail(): string {
    return this.user.email;
  }

  setId(id: number) {
    this.user.id = id;
  }

  setUserName(name: string) {
    this.user.name = name;
  }

  setEmail(email: string) {
    this.user.email = email;
  }
}
