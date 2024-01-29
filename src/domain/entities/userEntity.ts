export class UserEntity {
  constructor(private user: { name: string; email: string; password: string; role: string; id?: number }) {}

  getId(): number | undefined {
    return this.user.id;
  }

  getUserName(): string {
    return this.user.name;
  }

  getEmail(): string {
    return this.user.email;
  }

  getPassword(): string {
    return this.user.password;
  }

  getRole(): string {
    return this.user.role;
  }

  setId(id: number) {
    this.user.id = id;
  }

  setUserName(userName: string) {
    this.user.name = userName;
  }

  setEmail(email: string) {
    this.user.email = email;
  }

  setPassword(password: string) {
    this.user.password = password;
  }

  setRole(role: string) {
    this.user.role = role;
  }
}
